pragma solidity ^0.8.0;

import "./Collection.sol";
import "./IAnonyFans.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnonyFans is Ownable, IAnonyFans {

    // Creators can upload assets
    mapping ( address => bool) public registeredCreators;
    // Users can consume assets. Not used for now, but can be used for Users Ranking.
    mapping ( address => bool) public registeredUsers;
    // Collections per Creator (1 for now)
    mapping ( address => Collections) public collections;

    modifier onlyRegisteredCreators() {
        require(registeredCreators[msg.sender], "Creator not registered.");
        _;
    }
    

    function createCollection(string memory name, string memory symbol)
        external
        onlyRegisteredCreators
    {
        Collection newCollection = new Collection (name, symbol);
        // TODO: assign collection to msg.sender
        collections[msg.sender].collection = newCollection;
        collections[msg.sender].exists = true;
        emit CollectionAdded(msg.sender, name, symbol, address(newCollection));
    }

    function addAssetToCollection(string memory tokenURI) 
        external
        returns (uint256 assetId)
    {
        // storage so we can access it via pointer
        Collections storage senderCollections = collections[msg.sender];

        require(collections[msg.sender].exists, "Collection must exist");

        assetId = senderCollections.collection.addAsset(msg.sender, tokenURI);
        //newAsset.uploadAsset(msg.sender, tokenURI);
        emit AssetAdded(msg.sender, tokenURI, address(senderCollections.collection), assetId);
        
    }

    function getCollectionSize()
        external
        view
        returns (uint256)
    {
        if (collections[msg.sender].exists) {
            return collections[msg.sender].collection.balanceOf(msg.sender);
        }
        return 0;
    }

    function registerCreator() 
        external 
    {
        registeredCreators[msg.sender] = true;
        emit NewCreatorRegistered(msg.sender);
    }
   
    function unregisterCreator() 
        external 
    {
        delete registeredCreators[msg.sender];
        // TODO: Transfer all assets to user
        emit CreatorUnregistered(msg.sender);
    }

    function whoAmI()
        external
        view
        returns(address)
    {
        return msg.sender;
    }

    function amIaRegisteredCreator()
        external
        view
        returns(bool)
    {
        return registeredCreators[msg.sender];
    }
}

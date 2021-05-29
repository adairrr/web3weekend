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
    mapping ( address => Collection) public collections;

    modifier onlyRegisteredCreators() {
        require(registeredCreators[msg.sender], "Creator not registered.");
        _;
    }
    
    //constructor() ERC721("PostItem", "PST") {}

    function createCollection(string memory name, string memory symbol)
        external
        onlyRegisteredCreators
    {
        Collection newCollection = new Collection (name, symbol);
        // TODO: assign collection to msg.sender
        collections[msg.sender] = newCollection;
        
        // emit CollectionAdded(msg.sender, name, symbol, block.number, block.timestamp);
    }

    function addAssetToCollection(string memory tokenURI) 
        external
        returns (uint256)
    {
        return collections[msg.sender].addAsset(msg.sender, tokenURI);
        //newAsset.uploadAsset(msg.sender, tokenURI);
        // emit AssetAdded(msg.sender, tokenURI, block.number, block.timestamp);
        
    }

    function getCollectionSize()
        external
        view
        returns (uint256)
    {
       return collections[msg.sender].balanceOf(msg.sender);
    }

    function registerCreator() 
        external 
    {
        registeredCreators[msg.sender] = true;
        emit NewCreatorRegistered(msg.sender, block.number, block.timestamp);
    }
   
    function unregisterCreator() 
        external 
    {
        delete registeredCreators[msg.sender];
        // TODO: Transfer all assets to user
        // emit CreatorUnregistered(msg.sender, block.number, block.timestamp)
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

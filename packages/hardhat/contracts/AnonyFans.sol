pragma solidity ^0.8.0;

import "./UniqueAsset.sol";
import "./IAnonyFans.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnonyFans is Ownable, IAnonyFans {

    // Creators can upload assets
    mapping ( address => bool) public registeredCreators;
    // Users can consume assets. Not used for now, but can be used for Users Ranking.
    mapping ( address => bool) public registeredUsers;

    modifier onlyRegisteredCreators() {
        require(registeredCreators[msg.sender], "Creator not registered.");
        _;
    }
    
    //constructor() ERC721("PostItem", "PST") {}

    function newCollection(string memory name, string memory symbol, string memory tokenURI)
        external
        onlyRegisteredCreators
        returns (uint256)
    {
        UniqueAsset newAsset = new UniqueAsset (name, symbol);
        // TODO: assign collection to msg.sender
        // TODO: emit event;

        
    }

    function addAssetToCollection() {
        // TODO
        newAsset.uploadAsset(msg.sender, tokenURI);
        
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

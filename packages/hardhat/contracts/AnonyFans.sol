pragma solidity ^0.8.0;

import "./UniqueAsset.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnonyFans is Ownable {

    // Creators can upload assets
    mapping ( address => bool) public registeredCreators;
    // Users can consume assets. Not used for now, but can be used for Users Ranking.
    mapping ( address => bool) public registeredUsers;

    modifier onlyRegisteredCreators() {
        require(registeredCreators[msg.sender], "Creator not registered.");
        _;
    }
    
    //constructor() ERC721("PostItem", "PST") {}

    function newPost(address player, string memory tokenURI, string memory name, string memory symbol)
        external
        onlyRegisteredCreators
        returns (uint256)
    {
        UniqueAsset newAsset = new UniqueAsset (name, symbol);
        /*_tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;*/
    }

    function registerCreator() 
        external 
    {
        registeredCreators[msg.sender] = true;
        // emit NewCreatorRegistration(msg.sender, block.number, block.timestamp)
    }
   
    function unregisterCreator() 
        external 
    {
        registeredCreators[msg.sender] = false;
        // TODO: Transfer all assets to user
        // emit CreatorUnregistered(msg.sender, block.number, block.timestamp)
    }

}
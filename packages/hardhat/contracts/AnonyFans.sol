<<<<<<< .merge_file_iltzy0
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
=======
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract UniqueAsset is ERC721, /*ERC721Enumerable,*/ ERC721URIStorage, Ownable {
    /*using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    mapping ( address => bool) public registeredUsers;

    modifier onlyRegisteredUsers() {
        require(registeredUsers[msg.sender], "User not registered.");
        _;
    }


    constructor() ERC721("PostItem", "PST") {}

    function newPost(address creator, string memory tokenURI)
        public
        onlyRegisteredUsers
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newPostId = _tokenIds.current();
        _mint(creator, newPostId);
        _setTokenURI(newPostId, tokenURI);

        return newPostId;
    }
*/

    constructor ( string memory name, string memory symbol) ERC721 (name, symbol) {}

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721/*, ERC721Enumerable*/)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721/*, ERC721Enumerable*/)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
>>>>>>> .merge_file_KbQd3m

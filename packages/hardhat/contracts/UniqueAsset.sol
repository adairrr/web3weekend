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

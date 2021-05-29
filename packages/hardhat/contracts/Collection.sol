// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Collection is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor (string memory name, string memory symbol) ERC721 (name, symbol) {}

    function addAsset(address creator, string memory tokenURI)
        public
        // TODO: onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newAssetId = _tokenIds.current();
        _mint(creator, newAssetId);
        _setTokenURI(newAssetId, tokenURI);

        return newAssetId;
    }
}
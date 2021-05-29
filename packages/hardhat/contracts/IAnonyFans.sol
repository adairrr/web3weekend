pragma solidity ^0.8.0;

import "./Collection.sol";

interface IAnonyFans {
    event NewCreatorRegistered(address sender, uint256 blockNumber, uint256 blockTimestamp);
    event CreatorUnregistered(address sender, uint256 blockNumber, uint256 blockTimestamp);
    event AssetAdded(address sender, string tokenURI, uint256 blockNumber, uint256 blockTimestamp);
    event CollectionAdded(address sender, string name, string symbol, uint256 blockNumber, uint256 blockTimestamp);

    struct Collections {
        Collection collection;
        bool exists;
    }
}
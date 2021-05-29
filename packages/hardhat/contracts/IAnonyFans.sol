pragma solidity ^0.8.0;

import "./Collection.sol";

interface IAnonyFans {
    event NewCreatorRegistered(address creator);
    event CreatorUnregistered(address creator);

    event AssetAdded(
        address sender, 
        string tokenURI,
        address collectionAddress,
        uint256 assetId
    );

    event CollectionAdded(
        address sender, 
        string name, 
        string symbol,
        address collectionAddress
    );

    struct Collections {
        Collection collection;
        bool exists;
    }
}

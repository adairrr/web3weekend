import {
  NewCreatorRegistered as NewCreatorRegisteredEvent,
  CreatorUnregistered as CreatorUnregisteredEvent,
  CollectionAdded as CollectionAddedEvent,
  AssetAdded as AssetAddedEvent
} from '../generated/AnonyFans/AnonyFans';


import {
	Account,
  Collection,
  Asset,
} from '../generated/schema'

// import {
// 	events,
// 	transactions,
// } from '@amxx/graphprotocol-utils'

export function handleNewCreatorRegistered(event: NewCreatorRegisteredEvent): void {
  let creator = new Account(event.params.creator.toHex());
  creator.registered = true;

  creator.save();
}

export function handleCreatorUnregistered(event: CreatorUnregisteredEvent): void {
  let creator = new Account(event.params.creator.toHex());
  creator.registered = false;
  creator.save();
}

/*
event CollectionAdded(
  address sender, 
  string name, 
  string symbol,
  address collectionAddress
);
*/
export function handleCollectionAdded(event: CollectionAddedEvent): void {
  let collection = new Collection(event.params.collectionAddress.toHex());
  // can use Account.load() but would rather the subgraph stay online if an error occurs
  let collectionOwner = new Account(event.params.sender.toHex());
  collection.owner = collectionOwner.id;
  
  collection.name = event.params.name;
  collection.symbol = event.params.symbol;
  
  collectionOwner.save();
  collection.save();
}

/*
event AssetAdded(
  address sender, 
  string tokenURI,
  address collectionAddress,
  uint256 assetId
);
*/
export function handleAssetAdded(event: AssetAddedEvent): void {
  // no join in WASM
  let asset = new Asset(event.params.collectionAddress.toHex().concat('-').concat(event.params.assetId.toHex()));
  
  asset.uri = event.params.tokenURI;
  let assetCollection = Collection.load(event.params.collectionAddress.toHex());
  asset.collection = assetCollection.id;

  asset.save();
}

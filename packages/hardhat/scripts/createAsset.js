// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const ethers = hre.ethers;
//import { ethers } from 'hardhat';

async function main() {
  const signers = await ethers.getSigners();
  //console.log(signers);
  const admin = signers[0].address;
  const creator = signers[1].address;
  const consumer = signers[2].address;
  console.log("============================================================");
  console.log("Admin address:", admin);
  console.log("Creator address:", creator);
  console.log("Consumer address:", consumer);
  console.log("============================================================");
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const AnonyFans = await hre.ethers.getContractFactory("AnonyFans");
  const anonyfans = await AnonyFans.deploy();

  await anonyfans.deployed();

  console.log("AnonyFans deployed to:", anonyfans.address);

  const whoAmI = await anonyfans.whoAmI();
  console.log("Who am I? --> ", whoAmI);
  let amIaRegisteredCreator = await anonyfans.amIaRegisteredCreator();
  console.log("Am I registered? --> ", amIaRegisteredCreator);
  await anonyfans.registerCreator();
  amIaRegisteredCreator = await anonyfans.amIaRegisteredCreator();
  console.log("Am I registered, now? --> ", amIaRegisteredCreator);
  await anonyfans.createCollection("Coll Name", "Coll Symbol");
  let myAssets = await anonyfans.addAssetToCollection("ipfs://aodi384ooeu684684o6841351");
 // console.log("My assets : #",myAssets);
  myAssets = await anonyfans.addAssetToCollection("ipfs://aodi384ooeu684684o6841351");
 // console.log("My assets : #",myAssets);
  myAssets = await anonyfans.addAssetToCollection("ipfs://aodi384ooeu684684o6841351");
//  console.log("My assets : #",myAssets);
  const collectionSize = await anonyfans.getCollectionSize.call({'from': admin});
  console.log("My collection size : #", parseInt(collectionSize.value));


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

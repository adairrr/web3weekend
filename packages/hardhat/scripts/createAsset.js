// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const ethers = hre.ethers;
//import {ethers, deployments, getNamedAccounts, getUnnamedAccounts} from 'hardhat';

async function main() {
  const signers = await ethers.getSigners();
  //const users = await hre.getUnnamedAccounts();
  //console.log(users);
  const admin = signers[0];
  const creator = signers[1];
  const consumer = signers[2];
  console.log("============================================================");
  console.log("Admin address:", admin.address);
  console.log("Creator address:", creator.address);
  console.log("Consumer address:", consumer.address);
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
  const contractAsCreator = await anonyfans.connect(creator);

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
  await contractAsCreator.whoAmI();
  await contractAsCreator.registerCreator();
  await contractAsCreator.createCollection("Coll Name", "Coll Symbol");
  await contractAsCreator.addAssetToCollection("ipfs://111aodi384ooeu684684o6841351"); // Collection #1
  await contractAsCreator.addAssetToCollection("ipfs://222aodi384ooeu684684o6841351"); // Collection #2
  await contractAsCreator.addAssetToCollection("ipfs://333aodi384ooeu684684o6841351"); // Collection #3
  const collectionSize = await contractAsCreator.getCollectionSize();
  console.log("My collection size : #", collectionSize.toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

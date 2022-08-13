import { ethers } from "hardhat";

async function main() {

  const Stake = await ethers.getContractFactory("stake");
  const stake = await Stake.deploy();

  await stake.deployed();

  
 // const getBalance = await stake.contractBalance();
  //console.log("first function", getBalance);
  ////////////////////////
 // const ownerDeposit = await stake.ownerDepositsEther();
  //console.log("first function", ownerDeposit);

  const function1 = await stake.depositEther(1, { value: ethers.utils.parseEther("0.000001") });
 // const function1 = await stake.withDraw(2);
  //const function2 = await stake.

  // console.log("my contract", stake.address);
  console.log("first function", function1);
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

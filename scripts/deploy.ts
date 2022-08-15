import { ethers } from "hardhat";

async function main() {

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const time = currentTimestampInSeconds + 10;
  const Stake = await ethers.getContractFactory("stake");
  const stake = await Stake.deploy();

  await stake.deployed();

  //ether.getSigner;
  ////////////////////////
  // const ownerDeposit = await stake.ownerDepositsEther({ value: ethers.utils.parseEther("0.001")});
  // console.log("first function", ownerDeposit);
  
  const getBalance = await stake.contractBalance();
  console.log("Balance", getBalance);
 const function1 = await stake.depositEther(time, { value: ethers.utils.parseEther("0.001")});
 // const function1 = await stake.withDraw(2);
  //const function2 = await stake.

   console.log("my contract", stake.address);
  // console.log("first function", function1);
  //0x5FbDB2315678afecb367f032d93F642f64180aa3
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

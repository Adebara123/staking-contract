require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";


async function main() {
  let env_keys = {
    PrivateKey: process.env.PRIVATE_KEY as BytesLike,
    URL: process.env.GOERLI_URL,
  };
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const time = currentTimestampInSeconds + 1;
  //const networkProvider = ethers.getDefaultProvider("groeli", env_keys.URL);
 // let wallet = new ethers.Wallet(provider.PrivateKey, networkProvider);
  const _value = ethers.utils.parseEther("0.01");

  const CONTRACTADDRESS = "0xbCee5730d9250f6b185fD537a05175da0215270D";
  const STAKING = await ethers.getContractAt("Istaking", CONTRACTADDRESS);
  //   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  //console.log("")
  await STAKING.depositEther(time, {value: _value});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
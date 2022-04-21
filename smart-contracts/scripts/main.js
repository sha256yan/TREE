// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {

  const initAmount = ethers.BigNumber.from(10).pow(21);


  //use first signer for testing
  const signers = await hre.ethers.getSigners();
  const signer = signers[0]

  //tokenContracts schema: tokenTicker_Token : contractObj
  const tokenContracts = await deployTokens(initAmount, initAmount);

  /*
  const balance1 = await tokenContracts.CRB_Token.balanceOf(signer.address);
  const balance2 = await tokenContracts.TGV_Token.balanceOf(signer.address);
  await balance1; await balance2;
  console.log(balance1, balance2); 


  const govContract = await deployGovernance(tokenContracts);
  const CRB = await govContract.Governance.CRB();
  console.log(CRB);
  */




}





async function deployGovernance(tokenContracts) {
  const tokensAddresses = Object.values(tokenContracts).map(contract => contract.address);
  const GovInfos = {
    Governance: tokensAddresses
  }
  const Gov = await deployContracts(GovInfos);
  return Gov;
}





async function deployTokens(CRBInitAmount, TGVInitAmount) {
  /*
    Loads the ERC20 token contracts into a Contracts object
  */

  const ContractsInfos = {
    CRB_Token: [CRBInitAmount],
    TGV_Token: [TGVInitAmount],
  }

  const Contracts = await deployContracts(ContractsInfos);
  return Contracts;
}






async function deployContracts(ContractsInfos) {
  /*
    ContractsInfos is ContractName: [...constructor arguements] key vallue pairs.
  */

    //loads contract objects into name: contractObj key value pairs
    const contractObjects = {};
    const ContractPromises = Object.keys(ContractsInfos).map(async ContractName => {
      const RawContract = await hre.ethers.getContractFactory(ContractName).catch(() => console.log("RAW CONTRACT FETCH ERROR"));
      const contractObject = await RawContract.deploy(...ContractsInfos[ContractName]).catch(() => console.log("CONTRACT DEPLOYMENT ERROR"));
      contractObjects[ContractName] = contractObject;
    })

    await Promise.all(ContractPromises);

    return contractObjects;


}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

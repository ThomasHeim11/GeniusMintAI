const hre = require("hardhat");

async function main() {
  const NAME = "GeniusMintAI";
  const SYMBOL = "GMAI";
  const COST = ethers.utils.parseUnits("0.01", "ether"); // 0.01 ETH

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(NAME, SYMBOL, COST, {
    gasLimit: 6000000, // Increase the gas limit to cover deployment and minting
  });
  await nft.deployed();

  console.log(`Deployed NFT Contract at: ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

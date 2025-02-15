const hre = require('hardhat');

async function main() {
  [owner] = await ethers.getSigners();

  const KiraAccessControl = await hre.ethers.getContractFactory('KiraAccessControl');
  const kiraAccessControl = await KiraAccessControl.deploy();

  await kiraAccessControl.deployed();
  await kiraAccessControl.addManagerRole(owner.address);

  console.log('KiraAccessControl deployed to:', kiraAccessControl.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

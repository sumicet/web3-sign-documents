import { ethers } from 'hardhat';
import { ERC5289LibraryFactory } from '../types';

async function main() {
    // Get the signers
    const [deployer] = await ethers.getSigners();

    // Deploy the ERC5289LibraryFactory contract
    console.log('Deploying ERC5289LibraryFactory...');
    const erc5289LibraryFactory = await ethers.getContractFactory('ERC5289LibraryFactory');
    const deployedERC5289LibraryFactory = await erc5289LibraryFactory.connect(deployer).deploy();

    console.log(
        'ERC5289LibraryFactory deployed at:',
        await deployedERC5289LibraryFactory.getAddress()
    );
}

// Run the deployment script
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

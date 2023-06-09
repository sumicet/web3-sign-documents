import '@typechain/hardhat';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-chai-matchers';
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';

dotenv.config();

const config: HardhatUserConfig = {
    solidity: '0.8.18',
    networks: {
        hardhat: {},
        polygonMumbai: {
            url: 'https://matic-mumbai.chainstacklabs.com',
            accounts: [process.env.MUMBAI_PRIVATE_KEY as string],
        },
    },
    typechain: {
        outDir: 'types',
        target: 'ethers-v6',
        alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
        externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
        dontOverrideCompile: false, // defaults to false
    },
};

export default config;

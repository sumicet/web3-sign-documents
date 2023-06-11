import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
    bitskiWallet,
    braveWallet,
    coinbaseWallet,
    dawnWallet,
    metaMaskWallet,
    mewWallet,
    phantomWallet,
    rabbyWallet,
    rainbowWallet,
    safeWallet,
    walletConnectWallet,
    xdefiWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { config } from 'src/config';

/**
 * @see https://www.rainbowkit.com
 * @see https://wagmi.sh/react/getting-started
 */

const { chains, publicClient } = configureChains([polygonMumbai], [publicProvider()]);

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            /**
             * More wallets can be added.
             * @see https://www.rainbowkit.com/docs/custom-wallet-list.
             */
            metaMaskWallet({ chains }),
            coinbaseWallet({ appName: 'Web3 Sign Documents', chains }),
            walletConnectWallet({ projectId: config.rainbowKit.projectId, chains }),
            rainbowWallet({ projectId: config.rainbowKit.projectId, chains }),
            bitskiWallet({
                chains,
            }),
            braveWallet({
                chains,
            }),
            dawnWallet({
                chains,
            }),
            mewWallet({
                chains,
            }),
            phantomWallet({
                chains,
            }),
            rabbyWallet({
                chains,
            }),
            safeWallet({
                chains,
            }),
            xdefiWallet({
                chains,
            }),
        ],
    },
]);

// The inferred type of wagmiConfig cannot be named without a reference to
// '../../node_modules/@wagmi/core/dist/index-fc9ab085'. This is likely not
// portable. A type annotation is necessary.
// TODO: Remove `any`. Find a way to fix this error, it's probably something related to tsconfig.json.
const wagmiConfig: any = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export { chains, wagmiConfig };

import './polyfills';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';

import { createRoot } from 'react-dom/client';
import { Routes } from '@/components';
import { StrictMode } from 'react';
import { chains, wagmiConfig } from './web3';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider
                    chains={chains}
                    modalSize="compact"
                    appInfo={{
                        appName: 'Web3 Sign Documents',
                    }}
                >
                    <ChakraProvider theme={theme}>
                        <Routes />
                    </ChakraProvider>
                </RainbowKitProvider>
            </WagmiConfig>
        </QueryClientProvider>
    </StrictMode>
);

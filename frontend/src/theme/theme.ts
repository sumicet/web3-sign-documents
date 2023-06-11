import { ThemeConfig } from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
    useSystemColorMode: true,
    initialColorMode: 'system',
    // The prefix for all CSS custom properties (CSS variables).
    cssVarPrefix: 'web3-sd',
};

export const theme = extendTheme({
    config,
    foundations: {
        breakpoints: {
            base: '0px',
            // Mobile devices
            xs: '450px',
            // Mobile devices
            sm: '580px',
            // iPads, Tablets
            md: '768px',
            // Small screens, laptops
            lg: '992px',
            // Desktops, large screens
            xl: '1280px',
            // Extra large screens, TV
            '2xl': '1440px',
            // Extra large screens, TV
        },
    },
    components: {},
});

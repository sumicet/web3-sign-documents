import { Image } from '@/components';
import {
    Box,
    Button,
    Center,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWallet } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const MotionHStack = motion(HStack);
const MotionButton = motion(Button);

const motionProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
    transition: { bounce: 0, ease: 'easeInOut' },
};

export function Header() {
    const { openConnectModal } = useConnectModal();
    const { isConnecting, isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
    const { colorMode, setColorMode } = useColorMode();

    // TODO: Should extract this to a util function.
    const formattedAddress = `${address?.slice(0, 5)}...${address?.slice(address.length - 3)}`;

    return (
        <Center paddingX={{ base: '4', sm: '8' }} width="100%">
            <HStack
                justifyContent="space-between"
                spacing="6"
                width="100%"
                height="16"
                maxWidth="header.maxWidth"
            >
                <HStack as={Link} to="/">
                    <Image src={logo} boxSize={38} />
                    <Text fontWeight="bold" fontSize="xl">
                        SecureSign
                    </Text>
                </HStack>

                <HStack spacing="6">
                    <AnimatePresence mode="wait" initial={false}>
                        {isConnected ? (
                            <Menu>
                                <MenuButton>
                                    <MotionHStack spacing="5" {...motionProps}>
                                        <HStack spacing="2">
                                            <Icon as={FaWallet} boxSize="5" />
                                            <Text variant="body3Bold">{formattedAddress}</Text>
                                        </HStack>
                                    </MotionHStack>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        icon={<Icon as={IoLogOutOutline} boxSize="5" />}
                                        onClick={() => disconnect()}
                                    >
                                        Disconnect
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <MotionButton
                                variant="solid"
                                onClick={openConnectModal}
                                isLoading={isConnecting}
                                {...motionProps}
                            >
                                Connect wallet
                            </MotionButton>
                        )}
                    </AnimatePresence>

                    <Box>
                        <DarkModeSwitch
                            checked={colorMode !== 'dark'}
                            onChange={(checked) => setColorMode(!checked ? 'dark' : 'light')}
                            size={24}
                            sunColor="white"
                            moonColor="black"
                        />
                    </Box>
                </HStack>
            </HStack>
        </Center>
    );
}

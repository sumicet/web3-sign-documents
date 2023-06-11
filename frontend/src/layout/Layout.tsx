import { Center, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';

export function Layout({ children }: { children: React.ReactNode }) {
    const bgColor = useColorModeValue('white', 'black');

    return (
        <Flex boxSize="100%" bgColor={bgColor} position="relative">
            <VStack
                spacing={{ base: '16', sm: '20' }}
                paddingBottom={{ base: '16', sm: '20' }}
                boxSize="100%"
                position="relative"
            >
                <VStack
                    spacing={{ base: '5', sm: '10' }}
                    boxSize="100%"
                    position="relative"
                    // TODO: measure screen and add height here.
                    // 100vh is no bueno, safari hates it.
                    minHeight="calc(100vh - 120px)"
                >
                    <Header />
                    <Center boxSize="100%" paddingX={{ base: '4', sm: '8' }}>
                        <Flex maxWidth="container.maxWidth" boxSize="100%">
                            {children}
                        </Flex>
                    </Center>
                </VStack>
                {/* Footer */}
            </VStack>
        </Flex>
    );
}

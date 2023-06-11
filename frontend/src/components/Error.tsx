import { Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Balancer } from 'react-wrap-balancer';
import { VscBracketError } from 'react-icons/vsc';

export function Error() {
    return (
        <Center boxSize="100%">
            <VStack spacing={{ base: '48', sm: '64' }} width="100%">
                <Icon as={VscBracketError} boxSize={{ base: 100, sm: 200 }} />
                <VStack spacing="5">
                    <Balancer>
                        <Text fontSize="2xl">Error</Text>
                    </Balancer>
                    <Balancer>
                        <Text variant="body1">
                            We can't seem to find the page you're looking for.
                        </Text>
                    </Balancer>
                </VStack>
                <Button as={Link} to="/">
                    Go to homepage
                </Button>
            </VStack>
        </Center>
    );
}

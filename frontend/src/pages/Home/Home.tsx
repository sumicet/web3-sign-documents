import {
    Button,
    Flex,
    Icon,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Balancer } from 'react-wrap-balancer';
import { useAccount } from 'wagmi';
import { AiOutlinePlus } from 'react-icons/ai';
import { NewLibraryModal } from '@/components';
import { useGetLibraryCreatedsQuery } from 'src/gql/generated';

const cards = [
    {
        title: 'Unparalleled Security',
        description:
            'Our platform harnesses the power of blockchain technology, ensuring tamper-proof and transparent transactions. Every document uploaded is encrypted, timestamped, and permanently stored on the immutable blockchain, providing an irrefutable proof of authenticity.',
    },
    {
        title: 'IPFS Integration',
        description:
            'Say goodbye to traditional file storage systems. SecureSign seamlessly integrates with IPFS, a distributed peer-to-peer file system, to store your documents securely. This eliminates the risk of centralized data breaches and guarantees high availability and redundancy.',
    },
    {
        title: 'Collaborative Signing',
        description:
            'Collaborate effortlessly with colleagues, partners, or clients by sharing your documents for their signatures. Our intuitive interface enables multiple parties to review, sign, and track the progress of the document, making collaboration a breeze.',
    },
    {
        title: 'User-Friendly Interface',
        description:
            'We believe in simplicity without compromising functionality. Our user-friendly interface allows you to upload, manage, and track your documents with ease. Signing documents on the blockchain has never been this intuitive.',
    },
] as const;

export function Home() {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const cardBgColor = useColorModeValue('gray.100', 'gray.900');

    const { data } = useGetLibraryCreatedsQuery();

    const { isOpen, onClose, onOpen } = useDisclosure();

    if (isConnected) {
        return (
            <VStack width="100%" spacing={{ base: '5', md: '8' }} alignItems="flex-start">
                <Balancer>
                    <Text fontSize={{ base: 'xl', sm: '4xl' }} fontWeight={600}>
                        Your documents
                    </Text>
                </Balancer>
                <Flex justifyContent="flex-end" width="100%">
                    <Button
                        variant="outline"
                        leftIcon={<Icon as={AiOutlinePlus} boxSize="4" />}
                        onClick={onOpen}
                    >
                        New
                    </Button>
                    <NewLibraryModal isOpen={isOpen} onClose={onClose} />
                </Flex>
                <TableContainer width="100%">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Description</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.libraryCreateds?.map((library) => (
                                <Tr key={library.id}>
                                    <Td>{library.title}</Td>
                                    <Td>{library.description}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        );
    }

    return (
        <VStack width="100%" spacing={{ base: '16', md: '16' }}>
            <VStack width="100%">
                <Balancer>
                    <Text fontSize={{ base: 'xl', sm: '4xl' }} fontWeight={600}>
                        Welcome to SecureSign
                    </Text>
                </Balancer>
                <Balancer>
                    <Text fontSize={{ base: 'large', sm: '2xl' }}>
                        The Future of Document Signing on the Blockchain
                    </Text>
                </Balancer>
            </VStack>
            <Button variant="solid" size="lg" colorScheme="blue" onClick={openConnectModal}>
                Get started
            </Button>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="3">
                {cards.map((item) => (
                    <VStack padding="5" bgColor={cardBgColor} borderRadius="2xl">
                        <Text fontSize={{ base: 'medium', sm: 'large' }} fontWeight={600}>
                            {item.title}
                        </Text>
                        <Text fontSize={{ base: 'small', sm: 'medium' }}>{item.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </VStack>
    );
}

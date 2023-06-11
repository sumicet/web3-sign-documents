import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalProps,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    VStack,
    Textarea,
    FormErrorMessage,
    Text,
    useToast,
} from '@chakra-ui/react';
import { prepareWriteContract, waitForTransaction, writeContract } from 'wagmi/actions';
import { factoryAbi } from '@/web3';
import { useForm } from 'react-hook-form';
import type { SubmitHandler, FieldValues } from 'react-hook-form';

export function NewLibraryModal(props: Omit<ModalProps, 'children'>) {
    const { onClose } = props;
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const toast = useToast();

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            const { mode, request } = await prepareWriteContract({
                abi: factoryAbi,
                functionName: 'createLibrary',
                args: [values.title, values.description],
                address: '0xbf9828ac4F2C51CE72bD962Dd497c7c943942E4B',
            });
            const { hash } = await writeContract({ mode, ...request });
            onClose();
            toast({
                title: 'Creating library...',
                description: 'Please wait while we create your library.',
                status: 'loading',
                duration: 5000,
                id: `${hash}-loading`,
            });
            waitForTransaction({ hash }).then(() => {
                toast.close(`${hash}-loading`);
                toast({
                    title: 'Library created!',
                    description: 'Your library has been successfully created.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            });
        } catch (error: any) {
            toast({
                title: 'An error occurred.',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Modal {...props} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Library</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <VStack width="100%" alignItems="flex-start">
                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Title goes here..."
                                    {...register('title', {
                                        required: 'This field is required.',
                                    })}
                                />
                                <FormHelperText>The title of your library.</FormHelperText>
                                <FormErrorMessage>
                                    {errors?.title?.message as string}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    placeholder="Description goes here..."
                                    {...register('description')}
                                />
                                <FormHelperText>
                                    A short description of your library.
                                </FormHelperText>
                                <FormErrorMessage>
                                    {errors?.description?.message as string}
                                </FormErrorMessage>
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="solid" colorScheme="blue" type="submit">
                            Create
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

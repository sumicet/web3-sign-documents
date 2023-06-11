export const libraryAbi = [
    {
        inputs: [
            {
                internalType: 'string',
                name: '_title',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_description',
                type: 'string',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
        ],
        name: 'DocumentSigned',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
            {
                internalType: 'string',
                name: 'document',
                type: 'string',
            },
            {
                internalType: 'address[]',
                name: 'signers',
                type: 'address[]',
            },
        ],
        name: 'addLegalDocument',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
        ],
        name: 'documentSigned',
        outputs: [
            {
                internalType: 'bool',
                name: 'signed',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
        ],
        name: 'documentSignedAt',
        outputs: [
            {
                internalType: 'uint64',
                name: 'timestamp',
                type: 'uint64',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMetadata',
        outputs: [
            {
                internalType: 'string',
                name: 'title',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'description',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
        ],
        name: 'legalDocument',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'signer',
                type: 'address',
            },
            {
                internalType: 'uint16',
                name: 'documentId',
                type: 'uint16',
            },
        ],
        name: 'signDocument',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;

import type { CodegenConfig } from '@graphql-codegen/cli';
import { config } from './src/config';

const configCodegen: CodegenConfig = {
    overwrite: true,
    schema: 'https://api.studio.thegraph.com/query/48194/securesign/version/latest',
    documents: 'src/**/*.graphql',
    generates: {
        'src/gql/generated/index.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations',
                'typescript-react-query',
                'named-operations-object',
            ],
            config: {
                fetcher: '../fetcher#fetchData',
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

export default configCodegen;

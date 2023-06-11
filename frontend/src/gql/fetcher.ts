import { config } from 'src/config';

/**
 * This fetcher is needed to move the `extensions` object inside `data`. The
 * `extensions` object contains the `unlimitedTotal` property, which is needed
 * for pagination.
 */
export const fetchData = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
): (() => Promise<TData>) => {
    return async () => {
        // For some reason it doesn't like the query if it starts and ends with
        // a newline character.
        const finalQuery =
            query.startsWith('\n    ') && query.endsWith('\n    ') ? query.slice(5, -5) : query;

        const res = await fetch(config.subgraphUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options,
            },
            body: JSON.stringify({
                query: finalQuery,
                variables,
            }),
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0] || {};
            const updatedMessage = message || 'Something went wrong. Please try again.';
            throw new Error(updatedMessage);
        }

        return json.data;
    };
};

// {
//     "query": "\n    query GetLibraryCreateds($block: Block_height, $first: Int = 100, $orderBy: LibraryCreated_orderBy, $orderDirection: OrderDirection, $skip: Int = 0, $subgraphError: _SubgraphErrorPolicy_! = deny, $where: LibraryCreated_filter) {\n  libraryCreateds(\n    block: $block\n    first: $first\n    orderBy: $orderBy\n    orderDirection: $orderDirection\n    skip: $skip\n    subgraphError: $subgraphError\n    where: $where\n  ) {\n    id\n    wallet\n    libraryAddress\n    title\n    description\n  }\n}\n    "
// }

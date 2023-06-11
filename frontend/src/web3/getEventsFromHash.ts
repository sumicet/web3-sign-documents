import type { GetContractArgs } from 'wagmi/actions';
import { getPublicClient, fetchTransaction, getWalletClient } from 'wagmi/actions';
import { TransactionReceiptNotFoundError } from 'viem';

export interface GetEventsFromHashArgs extends Omit<GetContractArgs, 'signerOrProvider'> {
    /**
     * Event name
     */
    name: string;
    /**
     * Filter args
     *
     * @default []
     */
    args?: unknown[];
    /**
     * Transaction hash
     */
    hash: `0x${string}`;
}

/**
 * Decode event data from a transaction hash.
 *
 * Don't use this function directly. You're probably for `getEventsFromHash`.
 */
export const getEventsFromHash = async ({
    name,
    args = [],
    hash,
    abi,
    address,
}: GetEventsFromHashArgs) => {
    const publicClient = getPublicClient();

    const transaction = await fetchTransaction({ hash });
    console.log(transaction);

    if (!transaction) throw new TransactionReceiptNotFoundError({ hash });

    const filter = await publicClient.createContractEventFilter({
        abi,
        address,
        args,
        eventName: name,
        fromBlock: transaction.blockNumber || undefined,
        toBlock: transaction.blockNumber || undefined,
    });

    return (
        await publicClient.getFilterLogs({
            filter,
        })
    ).map((log) => log.args);
};

import { query } from '../utils/subgraph';
import { fetchData, countPerQuery, print } from '../helpers';

export async function getLinkedVerifiers(url: string, address: string): Promise<any[]> {
    address = address.toLowerCase();
    const queryData = JSON.stringify({
        query: ``,
    });

    const data = await query(url, queryData);
    return data.verifiers;
}
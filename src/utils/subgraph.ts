import { fetchData, print } from "../helpers";


export async function query(url: string, query: any) {
    const options = {
        url,
        headers: { 'Content-Type': 'application/json' },
        body: query,
    };

    let result = await fetchData(options);

    if (result.errors) {
        print(result.errors);
        throw new Error('Error while fetching data from subgraph');
    } else {
        return result.data;
    }
}
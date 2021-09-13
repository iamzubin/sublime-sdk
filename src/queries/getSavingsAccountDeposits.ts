import { fetchData, countPerQuery, print } from '../helpers';

export async function getSavingsAccountTokenDetails(url, address: string): Promise<any[]> {
  address = address.toLowerCase();
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        savingAccounts(where:{id:"${address}"}) {
          id,
          deposits (first: ${countPerQuery}, skip:${skip * countPerQuery}){
            id,  
            asset
          },
        }
      }
    `,
    });

    var options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    let result = await fetchData(options);
    // console.log({result, skip});
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.savingAccounts.length == 0) {
      return allData;
    } else if (
      result.data.savingAccounts.length > 0 &&
      result.data.savingAccounts[0].deposits &&
      result.data.savingAccounts[0].deposits == 0
    ) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.savingAccounts[0].deposits);
    }
  }
}

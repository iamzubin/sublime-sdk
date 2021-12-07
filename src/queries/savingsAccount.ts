import { query } from '../utils/subgraph';
import { fetchData, countPerQuery, print } from '../helpers';

export async function getBalances(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
      balances(where: {
        user: "${address}"
      }, first: ${countPerQuery}) {
        token
        strategy {
          address
        }
        shares
      }
    }`,
  });

  const data = await query(url, queryData);
  return data.balances;
}

export async function getSavingsAccountTokenDetails(url, address: string): Promise<any[]> {
  address = address.toLowerCase();
  let skip = 0;
  const allData = [];
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

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
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

export async function getAllowances(url, address: string, to: string): Promise<any[]> {
  address = address.toLowerCase();
  to = to.toLowerCase();
  let skip = 0;
  const allData = [];

  for (;;) {
    const data = JSON.stringify({
      query: `{
        allowances(where:{from:"${address}", to:"${to}"} , first: ${countPerQuery}, skip:${skip * countPerQuery}) {
          amount
          from
          to
          token
        }
      }
    `,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    // console.log({result});
    // console.log({result, skip});
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.allowances.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.allowances);
    }
  }
}

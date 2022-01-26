import { query } from '../utils/subgraph';
import { fetchData, countPerQuery, print } from '../helpers';

export async function getTwitterId(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
  userProfiles(where : {id : "${address}"}) {
    userMetadataPerVerifier {
      id
      metadata
    }
  }
}
`,
  });

  const data = await query(url, queryData);
  return data.userProfiles;
}
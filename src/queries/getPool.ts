import { fetchData } from '../helpers';

export async function getPool(url: string, poolId: string): Promise<any[]> {
  let allData = [];
  const data = JSON.stringify({
    query: `{
      pools(where:{id:"${poolId}"}) {
        id,
        borrowRate,
      lentAmount,
      nextRepayTime,
      borrowAsset,
      collateralAsset,
      loanStatus
      }
    }`,
  });

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  allData.push(...result.data.pools);
  return allData;
}

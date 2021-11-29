import { BigNumber } from 'bignumber.js';
import { fetchData, print } from '../helpers';

export async function getPrice(url, address: string): Promise<BigNumber> {
  address = address.toLowerCase();

  const data = JSON.stringify({
    query: `
      {
        price0: pairs(where:{
          token0: "${address}",
          token1_in : [
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "0x6b175474e89094c44da98b954eedeac495271d0f"
          ]
        }, orderBy: volumeUSD, orderDirection: desc, first: 1) {
          token1Price
        }
        price1: pairs(where:{
          token1: "${address}",
          token0_in : [
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "0x6b175474e89094c44da98b954eedeac495271d0f"
          ]
        }, orderBy: volumeUSD, orderDirection: desc, first: 1) {
          token0Price
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

  if (!result) {
    throw new Error('Error while fetching data from subgraph');
  }

  if (result.errors) {
    print(result.errors);
    throw new Error('Error while fetching data from subgraph');
  }

  let price: BigNumber = new BigNumber(0);

  if (result.data.price0 && result.data.price0.length != 0) {
    price = result.data.price0[0].token1Price;
  }

  if (result.data.price1 && result.data.price1.length != 0) {
    price = result.data.price1[0].token0Price;
  }

  if (result.data.price0 && result.data.price1 && result.data.price0.length != 0 && result.data.price1.length != 0) {
    let volume0 = new BigNumber(result.data.price0[0].volumeUSD);
    let volume1 = new BigNumber(result.data.price1[0].volumeUSD);
    if (volume0.gt(volume1)) {
      price = result.data.price0[0].token1Price;
    }
  }

  return price;
}

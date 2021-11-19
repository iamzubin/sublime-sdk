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

    if (result.errors) {
        print(result.errors);
        throw new Error('Error while fetching data from subgraph');
    }

    let price: BigNumber;

    if(result.price0.length != 0) {
        price = result.price0[0].token1Price;
    }

    if(result.price1.length != 0) {
        price = result.price1[0].token0Price;
    }

    if(result.price0.length != 0 && result.price1.length != 0) {
        let volume0 = new BigNumber(result.price0[0].volumeUSD);
        let volume1 = new BigNumber(result.price1[0].volumeUSD);
        if(volume0.gt(volume1)) {
            price = result.price0[0].token1Price;
        }
    }

    return price;
}

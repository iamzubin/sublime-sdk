import { fetchData, countPerQuery, print } from '../helpers';

export async function getAllPools(url): Promise<any[]> {
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pools(first: ${countPerQuery}, skip:${skip * countPerQuery}) {
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
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pools.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pools);
    }
  }
}

export async function getAllPoolsByPoolType(url: string, poolType: string): Promise<any[]> {
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        pools(first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{loanStatus:"${poolType}"}) {
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
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.pools.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.pools);
    }
  }
}

export async function getAllPoolsByBorrower(url: string, borrower: string): Promise<any[]> {
  borrower = borrower.toLowerCase();
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        users(where:{id:"${borrower}"}) {
          borrowingPools (first: ${countPerQuery}, skip:${skip * countPerQuery}) {
            id,
            borrowRate,
            lentAmount,
            nextRepayTime,
            borrowAsset,
            collateralAsset,
            loanStatus
          }
        }
      }`,
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
    } else if (result.data.users.length == 0) {
      return allData;
    } else if (result.data.users.length > 0 && result.data.users[0].borrowingPools && result.data.users[0].borrowingPools.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.users[0].borrowingPools);
    }
  }
}

export async function getAllPoolsByLender(url: string, lender: string): Promise<any[]> {
  lender = lender.toLowerCase();
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        users(where:{id:"${lender}"}) {
          lendingPools (first: ${countPerQuery}, skip:${skip * countPerQuery}) {
            id,
            pool {
              id,
              borrowRate,
              lentAmount,
              nextRepayTime,
              borrowAsset,
              collateralAsset,
              loanStatus
            }
          }
        }
      }`,
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
    } else if (result.data.users.length == 0) {
      return allData;
    } else if (result.data.users.length > 0 && result.data.users[0].lendingPools && result.data.users[0].lendingPools.length == 0) {
      return allData;
    } else {
      skip++;
      for (let index = 0; index < result.data.users[0].lendingPools.length; index++) {
        allData.push(result.data.users[0].lendingPools[index].pool);
      }
    }
  }
}

export async function getAllPoolsByLenderByType(url: string, lender: string, poolType: string): Promise<any[]> {
  lender = lender.toLowerCase();
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        users(where:{id:"${lender}"}) {
          lendingPools (first: ${countPerQuery}, skip:${skip * countPerQuery}) {
            id,
            pool(where:{loanStatus:"${poolType.toString()}"}){
              id,
              borrowRate,
              lentAmount,
              nextRepayTime,
              borrowAsset,
              collateralAsset,
              loanStatus
            }
          }
        }
      }`,
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
    } else if (result.data.users.length == 0) {
      return allData;
    } else if (result.data.users.length > 0 && result.data.users[0].lendingPools && result.data.users[0].lendingPools.length == 0) {
      return allData;
    } else {
      skip++;
      for (let index = 0; index < result.data.users[0].lendingPools.length; index++) {
        allData.push(result.data.users[0].lendingPools[index].pool);
      }
    }
  }
}

export async function getAllPoolsByBorrowerByType(url: string, borrower: string, poolType: string): Promise<any[]> {
  borrower = borrower.toLowerCase();
  let skip = 0;
  let allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        users(where:{id:"${borrower}"}) {
          borrowingPools (first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{loanStatus:"${poolType}"}) {
            id,
            borrowRate,
            lentAmount,
            nextRepayTime,
            borrowAsset,
            collateralAsset,
            loanStatus
          }
        }
      }`,
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
    } else if (result.data.users.length == 0) {
      return allData;
    } else if (result.data.users.length > 0 && result.data.users[0].borrowingPools && result.data.users[0].borrowingPools.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.users[0].borrowingPools);
    }
  }
}

import { fetchData } from '../helpers';

export async function getCreditLineTimeline(url: string, creditLineNumber: string): Promise<any> {
  const data = JSON.stringify({
    query: `{
      creditLines(where:{id:"${creditLineNumber}"}) {
        id
        borrowAsset
        creditLineTimeline(orderBy:timestamp, orderDirection:desc) {
          id
          timestamp
          creditLineOperation
          amount
          strategy
          liquidator
        }
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
  // console.log(result);
  return result;
}

async function _getCreditLinesOfBorrower(
  url: string,
  status: string[],
  requestByLender: boolean[],
  borrower: string,
  count,
  skip
): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (first:${count}, skip:${skip},where:{borrower:"${borrower}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
          id
          status
          lender
          lenderWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          borrower
          borrowerWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          requestByLender
          principal
          collateralAsset
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          autoLiquidation
          lastPrincipalUpdateTime
        }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

export async function getCreditLine(url: string, id: string): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (where:{id:"${id}"}){
            id
            status
            lender
            borrower
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfLender(
  url: string,
  status: string[],
  requestByLender: boolean[],
  lender: string,
  count,
  skip
): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (first:${count}, skip:${skip},where:{lender:"${lender}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
            id
            status
            lender
            borrower
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

// creditLineTypes ACTIVE, CLOSED, LIQUIDATED, NOT_CREATED, REQUESTED, CANCELLED
export async function getConfirmedCreditLinesOfBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getConfirmedCreditLinesOfLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditlinesRequestedByLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedByBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

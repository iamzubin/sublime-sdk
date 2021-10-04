import { fetchData } from '../helpers';

async function _getCreditLinesByBorrower(url: string, status, requestByLender, borrower: string, count, skip): Promise<any[]> {
  borrower = borrower.toLowerCase();
  let allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (first:${count}, skip:${skip},where:{Borrower:"${borrower}",requestByLender:${requestByLender}, creditLineStatus:${status}}){
            id
            creditLineStatus
            lender
            Borrower,
            requestByLender
            collateralAmount
            principal
            collateralAsset
            BorrowLimit
            borrowRate
            idealCollateralRatio
            BorrowAsset
            liquidationThreshold
            autoLiquidation
        }
    }`,
  });

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesByLender(url: string, status, requestByLender, lender: string, count, skip): Promise<any[]> {
  lender = lender.toLowerCase();
  let allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (first:${count}, skip:${skip},where:{lender:"${lender}",requestByLender:${requestByLender}, creditLineStatus:${status}}){
              id
              creditLineStatus
              lender
              Borrower,
              requestByLender
              collateralAmount
              principal
              collateralAsset
              BorrowLimit
              borrowRate
              idealCollateralRatio
              BorrowAsset
              liquidationThreshold
              autoLiquidation
          }
      }`,
  });

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

// creditLineTypes ACTIVE, CLOSED, LIQUIDATED, NOT_CREATED, REQUESTED, CANCELLED
export async function getCreditLinesByBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  let activeOnes = await _getCreditLinesByBorrower(url, 'ACTIVE', false, borrower, count, skip);
  let closedOnes = await _getCreditLinesByBorrower(url, 'CLOSED', false, borrower, count, skip);
  let liquidatedOnes = await _getCreditLinesByBorrower(url, 'LIQUIDATED', false, borrower, count, skip);
  let notCreatedOnes = await _getCreditLinesByLender(url, 'NOT_CREATED', false, borrower, count, skip);
  data = [...activeOnes, ...closedOnes, ...liquidatedOnes, ...notCreatedOnes];
  return data;
}

export async function getCreditLinesLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let activeOnes = await _getCreditLinesByLender(url, 'ACTIVE', true, lender, count, skip);
  let closedOnes = await _getCreditLinesByLender(url, 'CLOSED', true, lender, count, skip);
  let liquidatedOnes = await _getCreditLinesByLender(url, 'LIQUIDATED', true, lender, count, skip);
  let notCreatedOnes = await _getCreditLinesByLender(url, 'NOT_CREATED', true, lender, count, skip);
  data = [...activeOnes, ...closedOnes, ...liquidatedOnes, ...notCreatedOnes];
  return data;
}

export async function getPendingCreditLinesByBorrower(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let pendingBorrow = await _getCreditLinesByBorrower(url, 'REQUESTED', false, lender, count, skip);
  data = [...pendingBorrow];
  return data;
}

export async function getPendingCreditLinesByLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let pendingLend = await _getCreditLinesByLender(url, 'REQUESTED', true, lender, count, skip);

  data = [...pendingLend];
  return data;
}

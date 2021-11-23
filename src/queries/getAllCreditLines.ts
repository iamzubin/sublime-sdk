import { fetchData } from '../helpers';

export async function getCreditLineTimeline(url: string, creditLineNumber: string): Promise<any> {
  const data = JSON.stringify({
    query: `{
      creditLines(where:{id:"${creditLineNumber}"}) {
        id
        borrowAsset
        creditLineTimeline {
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

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  // console.log(result);
  return result;
}

async function _getCreditLinesOfBorrower(url: string, status, requestByLender, borrower: string, count, skip): Promise<any[]> {
  borrower = borrower.toLowerCase();
  let allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (first:${count}, skip:${skip},where:{borrower:"${borrower}",requestByLender:${requestByLender}, status:${status}}){
          id
          status	
          lender
          borrower
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

export async function getCreditLine(url: string, id: string): Promise<any[]> {
  let allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (where:{id:"${id}"}){
            id
            status	
            lender
            borrower
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

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfLender(url: string, status, requestByLender, lender: string, count, skip): Promise<any[]> {
  lender = lender.toLowerCase();
  let allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (first:${count}, skip:${skip},where:{lender:"${lender}",requestByLender:${requestByLender}, status:${status}}){
            id
            status	
            lender
            borrower
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

  var options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  let result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

// creditLineTypes ACTIVE, CLOSED, LIQUIDATED, NOT_CREATED, REQUESTED, CANCELLED
export async function getConfirmedCreditLinesOfBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  let activeOnes = await _getCreditLinesOfBorrower(url, 'ACTIVE', false, borrower, count, skip);
  let closedOnes = await _getCreditLinesOfBorrower(url, 'CLOSED', false, borrower, count, skip);
  let liquidatedOnes = await _getCreditLinesOfBorrower(url, 'LIQUIDATED', false, borrower, count, skip);
  let notCreatedOnes = await _getCreditLinesOfBorrower(url, 'NOT_CREATED', false, borrower, count, skip);

  let nr_activeOnes = await _getCreditLinesOfBorrower(url, 'ACTIVE', true, borrower, count, skip);
  let nr_closedOnes = await _getCreditLinesOfBorrower(url, 'CLOSED', true, borrower, count, skip);
  let nr_liquidatedOnes = await _getCreditLinesOfBorrower(url, 'LIQUIDATED', true, borrower, count, skip);
  let nr_notCreatedOnes = await _getCreditLinesOfBorrower(url, 'NOT_CREATED', true, borrower, count, skip);
  data = [
    ...activeOnes,
    ...closedOnes,
    ...liquidatedOnes,
    ...notCreatedOnes,
    ...nr_activeOnes,
    ...nr_closedOnes,
    ...nr_liquidatedOnes,
    ...nr_notCreatedOnes,
  ];
  return data;
}

export async function getConfirmedCreditLinesOfLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let activeOnes = await _getCreditLinesOfLender(url, 'ACTIVE', true, lender, count, skip);
  let closedOnes = await _getCreditLinesOfLender(url, 'CLOSED', true, lender, count, skip);
  let liquidatedOnes = await _getCreditLinesOfLender(url, 'LIQUIDATED', true, lender, count, skip);
  let notCreatedOnes = await _getCreditLinesOfLender(url, 'NOT_CREATED', true, lender, count, skip);

  let nr_activeOnes = await _getCreditLinesOfLender(url, 'ACTIVE', false, lender, count, skip);
  let nr_closedOnes = await _getCreditLinesOfLender(url, 'CLOSED', false, lender, count, skip);
  let nr_liquidatedOnes = await _getCreditLinesOfLender(url, 'LIQUIDATED', false, lender, count, skip);
  let nr_notCreatedOnes = await _getCreditLinesOfLender(url, 'NOT_CREATED', false, lender, count, skip);
  data = [
    ...activeOnes,
    ...closedOnes,
    ...liquidatedOnes,
    ...notCreatedOnes,
    ...nr_activeOnes,
    ...nr_closedOnes,
    ...nr_liquidatedOnes,
    ...nr_notCreatedOnes,
  ];

  return data;
}

export async function getPendingCreditlinesRequestedByLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let lines = await _getCreditLinesOfLender(url, 'REQUESTED', true, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToLender(url: string, lender, count, skip): Promise<any[]> {
  let data = [];
  let lines = await _getCreditLinesOfLender(url, 'REQUESTED', false, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedByBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  let lines = await _getCreditLinesOfBorrower(url, 'REQUESTED', false, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToBorrower(url: string, borrower, count, skip): Promise<any[]> {
  let data = [];
  let lines = await _getCreditLinesOfBorrower(url, 'REQUESTED', true, borrower, count, skip);
  data = [...lines];
  return data;
}

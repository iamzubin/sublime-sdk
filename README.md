# sublime-sdk

Sublime SDK is a simple package to interact with sublime smart contract. This file contains sample code how the sdk works. The SDK works with multiple wallet providers.

## Creating an instance of sublime-sdk

> import { SublimeSdk } from 'sublime-sdk';

Here in example we have used the provider from `ethers`

Please obtain the latest set of contract addresses and graphql addresses from devs

```
const provider = ethers.providers.getDefaultProvider('https://kovan.infura.io/v3/your-infura-token');
const privateKey = 'your private key hex string';
const signer = new ethers.Wallet(privateKey, provider);

const graphQlUrl = 'https://api.thegraph.com/subgraphs/name/sublime/sublime';

const instance = new SublimeSdk(provider, signer, graphQlUrl, {
  poolFactoryContractAddress: '0x49a82c3349A2830bb436F9f85265834877bCA4eb',
  creditLineContractAddress: '0xB642a5877Eb6511D75BdD0Bb9e4d31E251f99729',
  poolLogicContractAddress: '0x000000000000000000000000000000000000beef',
  savingsAccountContractAddress: '0xD1Ce6B73914dd8608Bca7e98Ad9DF8Fc92Ceb5b7',
  strategyRegistryContractAddress: '0xa885D3C3F26b445E452BbA3317384c5FeeE86BF1',
  verificationContractAddress: '0xBF09ecC3F7C439801779C9f2dcC684503e27F9c7',
  aaveStrategyContractAddress: '0x81cb9e3bf74a66d167ae5aeb5332011f157ac45f',
  compoundStrategyContractAddress: '0xc6cfc33063d34a3411ff74981c8494d12bf4fa1a',
  yearnStrategyContractAddress: '0xd51224b55de96cd6a8ccccea19eebececc861bb4',
  noStrategyAddress: '0x0000000000000000000000000000000000000000',
  repaymentContractAddress: '0x0000000000000000000000000000000000000000',
  extensionContractAddress: '0x0000000000000000000000000000000000000000',
});

const subgraph = instance.Subgraph();
const connector = instance.Connector();
```

`instance.Subgraph()` returns an object that fetch data from the subgraph
`instance.Connector()` returns an object that helps committing transactions on to the chain

## Examples

1. Fetch list of all pools

   > subgraph.getPools().then(console.log);

2. Fetch a pool by its address

   > subgraph.getPool('0xf6a919f75a262086afea0c8395acd4aa30a9e94a').then(console.log);

3. Get All Pools filtered by there type. Possible types are `Active`, `Closed`, `Cancelled`, `Defaulted`, `Terminated`, `Collecting`. Pool Types are case sensitive

   > subgraph.getAllPoolsByPoolType('Collecting').then(console.log);

4. Get Pools by borrower.

   > subgraph.getPoolByBorrower('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac').then(console.log);

5. Fetch Pools by Lender

   > subgraph.getPoolByLender('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac').then(console.log);

6. Fetch Pools By Borrow and By Pool Type

   > subgraph.getPoolByBorrowerByType('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac', "Collecting").then(console.log);

7. Fetch Pools by Lebder and by Pool Type

   > subgraph.getPoolByLenderByType('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac', "Collecting").then(console.log);

8. Get address overviews

```
subgraph.getSavingsAccountOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
subgraph.getCreditLinesOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
subgraph.getDashboardOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
subgraph.getProfileOverview("0x9B47f0731B86a910e7e2cbA50ec5573c62e95982").then(console.log);

```

9. Get deposit details by token

   > subgraph.getSavingsAccountTokenDetail('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);

10. List Credit lines by Borrower and Lenders

```
subgraph.getCreditLinesByBorrower('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', 1, 0).then(console.log);
subgraph.getCreditLinesByLender('0x6a32f49661bd7b054867ed22259575ad9f3366ca', 1, 0).then(console.log);
```

11. Get All Lenders of a Pool

```
subgraph.getAllLendersOfPool('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
```

12. Get the address of the signer used to sublime-sdk

    > connector.Address().then(console.log);

13. Get balance of Address

    > connector.getBalance("0x9B47f0731B86a910e7e2cbA50ec5573c62e95982").then(console.log);

14. Get All strategies by sublime

    > connector.YieldAndStrategyApi().getStrategies().then(console.log);

15. Requesting a credit line to borrower

```
connector.CreditLinesApi().requestCreditLineToBorrower({
  address: "0xBF09ecC3F7C439801779C9f2dcC684503e27F9c7",
  borrowAsset: "0x0000000000000000000000000000000000000000", // this is ETH
  borrowLimit: "13.23", // means 13.23 Ethers,
  collateralAsset: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // this is USDC
  liquidationThreshold: "231.4", // means 231.4%
  borrowRate: "7.15", //means 7.15%
  autoLiquidation: false,
  collateralRatio: "450.55" // means 450.55%
}).then(console.log)
```

16. Request a credit line to lender

```
connector.CreditLinesApi().requestCreditLineToLender({
  address: "0xBF09ecC3F7C439801779C9f2dcC684503e27F9c7",
  borrowAsset: "0x0000000000000000000000000000000000000000", // this is ETH
  borrowLimit: "13.23", // means 13.23 Ethers,
  collateralAsset: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // this is USDC
  liquidationThreshold: "231.4", // means 231.4%
  borrowRate: "7.15", //means 7.15%
  autoLiquidation: false,
  collateralRatio: "450.55" // means 450.55%
}).then(console.log)
```

17. Fetch Info wrt credit lines

```
connector.CreditLinesApi().calculateInterestAccrued("0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9").then(console.log);
connector.CreditLinesApi().calculateCurrentDebt("0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9").then(console.log);
connector.CreditLinesApi().calculateBorrowableAmount("0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9").then(console.log);
connector.CreditLinesApi().calculateCurrentCollateralRatio("0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9").then(console.log);
```

18. Total Collateral tokens locked in a credit line.

```
connector
  .CreditLinesApi()
  .calculateTotalCollateralTokens('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9')
  .then(console.log);
```

19. Withdraw collateral from credit line

```
connector
  .CreditLinesApi()
  .withdrawCollateralFromCreditLine('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9', '1.24') //if collateral asset is USDC, then 1.24 means 1.24 USDC
  .then(console.log);
```

20. Extension related operations

```
connector.ExtensionApi().requestExtenstion("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.ExtensionApi().voteOnExtension("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.ExtensionApi().closeExtension().then(console.log);

```

21. Create a pool

Creating a pool is a 3 step process, hence requires 3 transaction to be done!.

```
connector.PoolApi().generatePoolAddress({
  poolSize: "10", // 10 ETH
  minborrowAmount: "1", // 1 ETH
  borrower: "0x9B47f0731B86a910e7e2cbA50ec5573c62e95982", //here same as signer
  borrowToken: "0x0000000000000000000000000000000000000000", // ETH
  collateralToken: "0xab2af84a9db35f92dfb5b0607bd91226f5e97469", // Some Kovan Token
  collateralRatio: "213.33", // 213.33%
  borrowRate: "3.45", //3.45%
  repaymentInterval: "33", // not clear if days,months,timestamp
  noOfRepaymentIntervals: "44412", //
  strategy: "0x0000000000000000000000000000000000000000",
  collateralAmount: "32.341",
  transferFromSavingsAccount: false,
  salt: sha256(Buffer.from(new Date().valueOf().toString()))
}).then(console.log); // this will return an address (assume 0x701804b5A6c7698173BDbf90d563C7215C5Fb35A)

```

```
connector
  .TokenApi('0xab2af84a9db35f92dfb5b0607bd91226f5e97469')
  .IncreaseAllowance('0x701804b5A6c7698173BDbf90d563C7215C5Fb35A', '1432.3344')
  .then(console.log);

```

```
connector
  .PoolApi()
  .createPool({
    poolSize: '10', // 10 ETH
    minborrowAmount: '1', // 1 ETH
    borrower: '0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', //here same as signer
    borrowToken: '0x0000000000000000000000000000000000000000', // ETH
    collateralToken: '0xab2af84a9db35f92dfb5b0607bd91226f5e97469', // Some Kovan Token
    collateralRatio: '213.33', // 213.33%
    borrowRate: '3.45', //3.45%
    repaymentInterval: '33', // not clear if days,months,timestamp
    noOfRepaymentIntervals: '44412', //
    strategy: '0x0000000000000000000000000000000000000000',
    collateralAmount: '32.341',
    transferFromSavingsAccount: false,
    salt: sha256(Buffer.from(new Date().valueOf().toString())), // make sure you use same salt
  }).then(console.log);

```

22. Multiple Pool Operations and getters

```
connector.PoolApi().depositCollateral("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", "12.334", false).then(console.log);
connector.PoolApi().interestTillNow("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.PoolApi().interestPerPeriod("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","23234335").then(console.log);
connector.PoolApi().interestPerSecond("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","100092389345").then(console.log);

connector.PoolApi().getCurrentCollateralRatio("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.PoolApi().liquidatePool("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", false, false, false).then(console.log);
connector.PoolApi().liquidateLender("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", '0xab2af84a9db35f92dfb5b0607bd91226f5e97469', false, false, false).then(console.log);
connector.PoolApi().calculateCurrentPeriod("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.PoolApi().getMarginCallEndTime("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", "0xab2af84a9db35f92dfb5b0607bd91226f5e97469").then(console.log);
connector.PoolApi().getLoanStatus("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log)
connector.PoolApi().getBalanceDetails("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", "0xab2af84a9db35f92dfb5b0607bd91226f5e97469").then(console.log);
connector.PoolApi().getTotalSupply("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log)
connector.PoolApi().getPoolInfo("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log)

```

23. Various Repayment APIs

```
connector.RepaymentApi().getInterestPerSecond("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getInstalmentsCompleted("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getInterestDueTillInstalmentDeadline("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getNextInstalmentDeadline("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getCurrentInstalmentInterval("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getCurrentLoanInterval("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().isGracePenaltyApplicable("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().didBorrowerDefault("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getInterestLeft("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getInterestOverdue("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getTotalRepaidAmount("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().getGracePeriodFraction("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
connector.RepaymentApi().repayAmount("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", "12.43").then(console.log);
connector.RepaymentApi().repayPrincipal("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5", "12.43").then(console.log);
```

24. Verification APIs

```
connector.VerificationApi().getOffchainDetails("0x9B47f0731B86a910e7e2cbA50ec5573c62e95982").then(console.log);
connector.VerificationApi().isUser("0x9B47f0731B86a910e7e2cbA50ec5573c62e95982").then(console.log);
```

25. Other Yield and Strategy APIs

```
// connector.YieldAndStrategyApi().getStrategies().then(console.log);
// connector.YieldAndStrategyApi().getSharesForTokens("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
// connector.YieldAndStrategyApi().getTokensForShares("0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5","0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5").then(console.log);
```

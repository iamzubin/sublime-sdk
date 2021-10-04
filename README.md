# sublime-sdk

Sublime SDK is a simple package to interact with sublime smart contract. This file contains sample code how the sdk works. The SDK works with multiple wallet providers.

## Creating an instance of sublime-sdk

```
import { SublimeSdk } from './src';
import { ethers } from 'ethers';
import { sha256 } from '@ethersproject/sha2';

// creating a sample provider for CLI
const provider = ethers.providers.getDefaultProvider('https://kovan.infura.io/v3/9dc997986f8840daa0e6ccb1d8d0d757');
const privateKey = 'some private key hex';
const signer = new ethers.Wallet(privateKey, provider);

const graphQlUrl = 'https://api.thegraph.com/subgraphs/name/akshay111meher/sublime-subgraph-august';

// pass metamask(or any wallet) provider and signer to sdk for UI to connect to sublime
const instance = new SublimeSdk(provider, signer, graphQlUrl, {
  poolFactoryContractAddress: '0x119cA47EB9116bF902eD945eCFB7c90306017C47',
  creditLineContractAddress: '0xA969469e309339c08937417563001C4c9da20df2',
  poolLogicContractAddress: '0x133F9faBeBd6a720b7e96e522b44660E2Ea1399D',
  savingsAccountContractAddress: '0x3398818F4C563E71F62E0F107a82d71c9C4930Ff',
  strategyRegistryContractAddress: '0xDC4DAbcc00b6f3bdC64d7c76CE5c9327B3a7ed1D',
  verificationContractAddress: '0x06880474a41C00A5b4680F43586155CBD8815200',
  aaveStrategyContractAddress: '0xd63E746B7613dDa68EE3a76748BEFbfaf24BbFa9',
  compoundStrategyContractAddress: '0xa0786b2adC611e7c23396eEf9ae9e874B12A0c81',
  yearnStrategyContractAddress: '0x0000000000000000000000000000000000000000',
  noStrategyAddress: '0x0000000000000000000000000000000000000000',
  repaymentContractAddress: '0xe178b21C1b7f62281A1aF5e6019698c8Ab93047a',
  extensionContractAddress: '0x552332E79Dca3e396D8B83963629BA07ab161E4A',
  adminVerifierContractAddress: '0xB0A9833a00405b422E0504d1113E970c1F863c48',
});

const subgraph = instance.Subgraph();
const connector = instance.Connector();

const salt = sha256(Buffer.from("this same string can't be used twice for creating a pool. randomize this"));

subgraph.getPools().then(console.log);
subgraph.getPool('0xf6a919f75a262086afea0c8395acd4aa30a9e94a').then(console.log);
subgraph.getAllPoolsByPoolType('Collecting').then(console.log); // Active, Closed, Cancelled, Defaulted, Terminated, Collecting
subgraph.getPoolByBorrower('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac').then(console.log);
subgraph.getPoolByLender('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac').then(console.log);

subgraph.getPoolByBorrowerByType('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac', 'Collecting').then(console.log);
subgraph.getPoolByLenderByType('0xba4d24bb13e64a9404bfacf937cce6bb40a511ac', 'Collecting').then(console.log);

subgraph.getSavingsAccountOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
subgraph.getCreditLinesOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
subgraph.getDashboardOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);

subgraph.getSavingsAccountTokenDetail('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);

subgraph.getProfileOverview('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);

subgraph.getCreditLinesByBorrower('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', 1, 0).then(console.log);
subgraph.getCreditLinesByLender('0x6a32f49661bd7b054867ed22259575ad9f3366ca', 1, 0).then(console.log);
subgraph.getPendingCreditLinesByBorrower('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', 1, 0).then(console.log);
subgraph.getPendingCreditLinesByLender('0x6a32f49661bd7b054867ed22259575ad9f3366ca', 1, 0).then(console.log);

subgraph.getAllLendersOfPool('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);

connector.Address().then(console.log);
connector.getBalance('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
connector.YieldAndStrategyApi().getStrategies().then(console.log);

connector
  .CreditLinesApi()
  .requestCreditLineToBorrower({
    address: '0xBF09ecC3F7C439801779C9f2dcC684503e27F9c7',
    borrowAsset: '0x0000000000000000000000000000000000000000', // this is ETH
    borrowLimit: '13.23', // means 13.23 Ethers,
    collateralAsset: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // this is USDC
    liquidationThreshold: '231.4', // means 231.4%
    borrowRate: '7.15', //means 7.15%
    autoLiquidation: false,
    collateralRatio: '450.55', // means 450.55%
  })
  .then(console.log);

connector
  .CreditLinesApi()
  .requestCreditLineToLender({
    address: '0xBF09ecC3F7C439801779C9f2dcC684503e27F9c7',
    borrowAsset: '0x0000000000000000000000000000000000000000', // this is ETH
    borrowLimit: '13.23', // means 13.23 Ethers,
    collateralAsset: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // this is USDC
    liquidationThreshold: '231.4', // means 231.4%
    borrowRate: '7.15', //means 7.15%
    autoLiquidation: false,
    collateralRatio: '450.55', // means 450.55%
  })
  .then(console.log);

connector.CreditLinesApi().calculateInterestAccrued('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9').then(console.log);
connector.CreditLinesApi().calculateCurrentDebt('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9').then(console.log);
connector
  .CreditLinesApi()
  .calculateBorrowableAmount('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9')
  .then(console.log);
connector
  .CreditLinesApi()
  .calculateCurrentCollateralRatio('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9')
  .then(console.log);
connector
  .CreditLinesApi()
  .calculateTotalCollateralTokens('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9')
  .then(console.log);

connector
  .CreditLinesApi()
  .withdrawCollateralFromCreditLine('0x0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9', '1.24') //if collateral asset is USDC, then 1.24 means 1.24 USDC
  .then(console.log);

connector.ExtensionApi().requestExtenstion('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.ExtensionApi().voteOnExtension('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.ExtensionApi().closeExtension().then(console.log);

connector
  .PoolApi()
  .generatePoolAddress({
    borrowAmountRequests: '10', // 10 DAI
    borrowRate: '3.45', //3.45%
    borrower: '0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', //here same as signer
    borrowToken: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', // DAI
    collateralToken: '0x0000000000000000000000000000000000000000', // Putting ETH as collateral
    collateralRatio: '213.33', // 213.33%
    collateralVolatilityThreshold: '2',
    repaymentInterval: '33', // not clear if days,months,timestamp
    noOfRepaymentIntervals: '44412', //
    strategy: '0x0000000000000000000000000000000000000000',
    collateralAmount: '0.01',
    transferFromSavingsAccount: false,
    salt,
    lenderVerifier: '0x0000000000000000000000000000000000000000',
  })
  .then(console.log); // this will return an address (assume 0x89e6b8f942dF127D1441b7BAF9645D1f0561A23d)

connector
  .TokenApi('0xab2af84a9db35f92dfb5b0607bd91226f5e97469')
  .IncreaseAllowance('0x701804b5A6c7698173BDbf90d563C7215C5Fb35A', '1432.3344')
  .then(console.log);

connector.VerificationApi().registerUserByAdminVerifier('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', true).then(console.log);
connector.VerificationApi().isUser('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
connector.VerificationApi().isVerifier().then(console.log);
connector.VerificationApi().addVerifier().then(console.log);

connector
  .PoolApi()
  .createPool({
    borrowAmountRequests: '10', // 10 DAI
    borrowRate: '3.45', //3.45%
    borrower: '0x9B47f0731B86a910e7e2cbA50ec5573c62e95982', //here same as signer
    borrowToken: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', // DAI
    collateralToken: '0x0000000000000000000000000000000000000000', // Putting ETH as collateral
    collateralRatio: '213.33', // 213.33%
    collateralVolatilityThreshold: '2',
    repaymentInterval: '33', // not clear if days,months,timestamp
    noOfRepaymentIntervals: '44412', //
    strategy: '0x0000000000000000000000000000000000000000',
    collateralAmount: '0.01',
    transferFromSavingsAccount: false,
    salt,
    lenderVerifier: '0x0000000000000000000000000000000000000000',
  })
  .then(console.log);

connector.PoolApi().depositCollateral('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '12.334', false).then(console.log);
connector.PoolApi().interestTillNow('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.PoolApi().interestPerPeriod('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '23234335').then(console.log);
connector.PoolApi().interestPerSecond('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '100092389345').then(console.log);

connector.PoolApi().getCurrentCollateralRatio('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.PoolApi().liquidatePool('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', false, false, false).then(console.log);
connector
  .PoolApi()
  .liquidateLender('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '0xab2af84a9db35f92dfb5b0607bd91226f5e97469', false, false, false)
  .then(console.log);
connector.PoolApi().calculateCurrentPeriod('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector
  .PoolApi()
  .getMarginCallEndTime('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '0xab2af84a9db35f92dfb5b0607bd91226f5e97469')
  .then(console.log);
connector.PoolApi().getLoanStatus('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector
  .PoolApi()
  .getBalanceDetails('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '0xab2af84a9db35f92dfb5b0607bd91226f5e97469')
  .then(console.log);
connector.PoolApi().getTotalSupply('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.PoolApi().getPoolInfo('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);

connector.RepaymentApi().getInterestPerSecond('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getInstalmentsCompleted('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getInterestDueTillInstalmentDeadline('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getNextInstalmentDeadline('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getCurrentInstalmentInterval('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getCurrentLoanInterval('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().isGracePenaltyApplicable('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().didBorrowerDefault('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getInterestLeft('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getInterestOverdue('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getTotalRepaidAmount('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().getGracePeriodFraction('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);
connector.RepaymentApi().repayAmount('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5', '12.43').then(console.log);
connector.RepaymentApi().repayPrincipal('0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5').then(console.log);

connector.VerificationApi().getOffchainDetails('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);
connector.VerificationApi().isUser('0x9B47f0731B86a910e7e2cbA50ec5573c62e95982').then(console.log);

connector.YieldAndStrategyApi().getStrategies().then(console.log);
connector
  .YieldAndStrategyApi()
  .getSharesForTokens(
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5',
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5',
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5'
  )
  .then(console.log);
connector
  .YieldAndStrategyApi()
  .getTokensForShares(
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5',
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5',
    '0x018a88add47a7ad49e7f57e600eceb8dfd2cd0f5'
  )
  .then(console.log);

```
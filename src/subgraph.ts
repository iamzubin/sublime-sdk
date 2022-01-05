import {
  CreditLineDetail,
  CreditLinesOverview,
  DashboardOverview,
  PoolDetail,
  ProfileOverview,
  PoolLender,
  SavingsAccountUserDetails,
  SavingAccountUserDetailDisplay,
  SavingsAccountStrategyBalanceDisplay,
  CreditLineOperation,
} from './types/Types';
import {
  getAllPools,
  getPool,
  getAllPoolsByPoolType,
  getAllPoolsByBorrower,
  getAllPoolsByLender,
  getAllPoolsByBorrowerByType,
  getAllPoolsByLenderByType,
  getConfirmedCreditLinesOfBorrower,
  getConfirmedCreditLinesOfLender,
  getPendingCreditLinesRequestedByBorrower,
  getPendingCreditLinesRequestedToBorrower,
  getPendingCreditLinesRequestedToLender,
  getPendingCreditlinesRequestedByLender,
  getCreditLineTimeline,
  getCreditLine,
  getBalances,
  getAllowances,
} from './queries';

import { Signer } from '@ethersproject/abstract-signer';

import { BigNumber } from 'bignumber.js';
import { sha256 } from '@ethersproject/sha2';

import { TokenManager } from './tokenManager';
import { YieldAndStrategyApi } from './api/yieldAndStrategy';

import { CreditLine } from './wrappers/CreditLine';
import { CreditLine__factory } from './wrappers/factories/CreditLine__factory';
import { SublimeConfig } from './types/sublimeConfig';
import { ICToken, ICToken__factory, IYield, IYield__factory } from './wrappers';
import { zeroAddress } from './config/constants';

/**
 * @class SublimeSubgraph
 */
export class SublimeSubgraph {
  /**
   * @description subgraph url for fetching the sublime data
   */
  private subgraphUrl: string;

  /**
   * @description signer used to sign
   */
  private signer: Signer;

  /**
   * @description instance of token manager class that caches and retreives token data
   */
  private tokenManager: TokenManager;

  /**
   * @description instance of credit line contract
   */
  private creditLineContract: CreditLine;

  private yieldApi: YieldAndStrategyApi;
  /**
   * @description sublime config. (Contains all addresses relevant to sublime ecosystem)
   */
  private sublimeAddresses: SublimeConfig;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    this.creditLineContract = new CreditLine__factory(signer).attach(config.creditLineContractAddress);
    this.subgraphUrl = url;
    this.signer = signer;
    this.tokenManager = tokenManager;
    this.sublimeAddresses = config;
    this.yieldApi = new YieldAndStrategyApi(this.signer, config, this.tokenManager);
  }

  /**
   *
   * @returns Array of all pools created on sublime
   */
  async getPools(): Promise<PoolDetail[]> {
    let result = await getAllPools(this.subgraphUrl);
    return this.transformToPoolDetail(result);
  }

  /**
   *
   * @param poolType (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED)
   * @returns Array of specific pool types
   */
  async getAllPoolsByPoolType(poolType: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByPoolType(this.subgraphUrl, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolId
   * @returns pool data if the pool exists, else null
   */
  async getPool(poolId: string): Promise<PoolDetail> {
    let result = await getPool(this.subgraphUrl, poolId);
    let poolDetails: PoolDetail[] = await this.transformToPoolDetail(result);
    return poolDetails[0];
  }

  /**
   * @param borrower: address of the borrower
   * @returns Array of pools for the corresponding borrower
   */
  async getPoolByBorrower(borrower: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrower(this.subgraphUrl, borrower);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @returns Array of pool for the lender
   */
  async getPoolByLender(lender: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLender(this.subgraphUrl, lender);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByLenderByType(lender: string, poolType: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByLenderByType(this.subgraphUrl, lender, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByBorrowerByType(borrower: string, poolType: string): Promise<PoolDetail[]> {
    let result = await getAllPoolsByBorrowerByType(this.subgraphUrl, borrower, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolAddress
   * @returns All the lenders of a given pool
   */
  async getAllLendersOfPool(poolAddress: string): Promise<PoolLender[]> {
    let totalNumberOfLenders = 1 + this.getRandomInt(100);
    let lenders: PoolLender[] = [];
    let date = new Date().valueOf();
    let poolToken = sha256(Buffer.from(date + 'poolToken')).slice(0, 40);
    let suppliedToken = sha256(Buffer.from(date + 'suppliedToken')).slice(0, 40);

    for (let index = 0; index < totalNumberOfLenders; index++) {
      lenders.push({
        address: sha256(Buffer.from(date + '' + index)).slice(0, 40),
        shareInPool: new BigNumber(this.getRandomInt(3000)).div(100).toFixed(2),
        suppliedAmount: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2),
        poolToken: {
          address: poolToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
        suppliedToken: {
          address: suppliedToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
        },
      });
    }
    return lenders;
  }

  /**
   *
   * @param data
   * @description transaform the data recevied from the subgraph to type
   */
  private async transformToCreditLine(data: any[]): Promise<CreditLineDetail[]> {
    let borrowTokens: string[] = data.map((a) => a.collateralAsset);
    let collateralTokens: string[] = data.map((a) => a.borrowAsset);
    let allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    let creditLineTotalCollateralTokens = {};

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      creditLineTotalCollateralTokens[element.id] = (
        await this.creditLineContract.connect(this.signer).callStatic.calculateTotalCollateralTokens(element.id)
      ).toString();
      // console.log({tc: creditLineTotalCollateralTokens[element.id], id: element.id})
    }

    let creditLineDetails: Promise<CreditLineDetail>[] = data.map(async (a) => {
      let interestAccrued: BigNumber = new BigNumber(0);
      let currentDebt: BigNumber = new BigNumber(0);
      let collateralRatio: BigNumber = new BigNumber(0);

      if (a.lastPrincipalUpdateTime != 0) {
        let timeElapsed: number = Date.now() / 1000 - a.lastPrincipalUpdateTime;
        interestAccrued = new BigNumber(a.principal)
          .multipliedBy(new BigNumber(a.borrowRate))
          .times(timeElapsed)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)))
          .div(new BigNumber(10).pow(30))
          .div(24 * 60 * 60 * 365);

        currentDebt = new BigNumber(a.principal)
          .plus(interestAccrued)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)));

        collateralRatio = new BigNumber(creditLineTotalCollateralTokens[a.id])
          .multipliedBy(100)
          .multipliedBy(await this.tokenManager.getPricePerAsset(a.collateralAsset))
          .div(await this.tokenManager.getPricePerAsset(a.borrowAsset))
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
          .div(currentDebt);
      }
      return {
        currentDebt: currentDebt.toFixed(2),
        principal: new BigNumber(a.principal).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset))).toFixed(2),
        interestAccrued: interestAccrued.toFixed(6),
        collateralRatio: collateralRatio.toFixed(2),
        creditLimit: new BigNumber(a.borrowLimit).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset))).toFixed(2),
        interestRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(28)).toFixed(2),
        idealCollateralRatio: new BigNumber(a.idealCollateralRatio).div(new BigNumber(10).pow(28)).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.borrowAsset)).toString(),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.collateralAsset)).toString(),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },
        autoLiquidate: a.autoLiquidation,
        lender: { address: a.lender, otherData: a.lenderWalletDetails },
        borrower: { address: a.borrower, otherData: a.borrowerWalletDetails },
        type: a.status,
        lastPrincipalUpdateTime: a.lastPrincipalUpdateTime,
        id: a.id,
        requestByLender: a.requestByLender,
      };
    });
    return Promise.all(creditLineDetails);
  }

  /**
   * @param data
   * @@description transforms the data received from the subgraph to pool detail
   */
  private async transformToPoolDetail(data: any[]): Promise<PoolDetail[]> {
    let borrowTokens: string[] = data.map((a) => a.collateralAsset);
    let collateralTokens: string[] = data.map((a) => a.borrowAsset);
    let allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }
    let transformedData: Promise<PoolDetail>[] = data.map(async (a) => {
      return {
        address: a.id,
        poolType: a.loanStatus,
        borrowedAmount: new BigNumber(a.borrowAmountRequested)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.borrowAsset)))
          .toFixed(2),
        lentAmount: new BigNumber(a.lentAmount)
          .div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(a.collateralAsset)))
          .toFixed(2),
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(28)).toFixed(2),
        nextPayment: new BigNumber(a.nextRepayTime).toString(),
        repaymentProgress: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.borrowAsset)).toString(),
          logo: this.tokenManager.getLogo(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.collateralAsset)).toString(),
          logo: this.tokenManager.getLogo(a.collateralAsset),
        },
        estimatedEndDate: new BigNumber(this.getRandomInt(1000000)).multipliedBy(new BigNumber(10).pow(4)).toString(),
        lockedCollateral: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        collectionProgress: new BigNumber(this.getRandomInt(100)).toFixed(2),
        lent: new BigNumber(this.getRandomInt(1000000)).div(100).toFixed(2),
        profit: new BigNumber(this.getRandomInt(100000)).div(100).toFixed(2),
        endedOn: new BigNumber(this.getRandomInt(1000000)).multipliedBy(1000).toString(),
      };
    });
    // console.log({transformedData});
    return Promise.all(transformedData);
  }

  /**
   * @param strategy
   * @@description calulcates the APR for a given strategy
   */
  private async getAPR(strategy: string): Promise<BigNumber> {
    const BLOCKS_PER_DAY = 6570; // 13.15 sec block
    const DAYS_PER_YEAR = 365;
    if (strategy == this.sublimeAddresses.compoundStrategyContractAddress) {
      // Ref - "Calculating the APY Using Rate Per Block" section in https://compound.finance/docs
      let cTokenContract: ICToken = ICToken__factory.connect(strategy, this.signer);
      let supplyRatePerBlock = new BigNumber((await cTokenContract.callStatic.supplyRatePerBlock()).toString());
      let perDaySupplyRate = supplyRatePerBlock.div(new BigNumber(10).pow(18)).multipliedBy(BLOCKS_PER_DAY).plus(1);
      let perYearSupplyRate = perDaySupplyRate.pow(DAYS_PER_YEAR).minus(1).multipliedBy(100);
      return perYearSupplyRate;
    } else if (strategy == this.sublimeAddresses.noStrategyAddress) {
      return new BigNumber(0);
    }
    return new BigNumber(0);
  }

  /**
   * @param address
   * @param data
   * @description Tranforms the data received from the subgraph to type
   */
  private async transformToSavingsAccountUserDetails(address: string, data: any[]): Promise<SavingAccountUserDetailDisplay> {
    let allowances = await getAllowances(this.subgraphUrl, address, this.sublimeAddresses.creditLineContractAddress);
    let savingsAccountUserDetails: SavingsAccountUserDetails = {
      user: address,
      totalBalance: new BigNumber(0),
      balances: [],
    };

    let tokenIndex = {};
    let strategyIndex = {};

    let tokenPrice = {};

    let yieldContract: IYield = IYield__factory.connect(zeroAddress, this.signer);

    for (let i = 0; i < data.length; i++) {
      let strategy = data[i].strategy.address;
      let token = data[i].token;
      let shares = data[i].shares;
      if (!strategyIndex[token]) {
        strategyIndex[token] = {};
      }

      yieldContract = await yieldContract.attach(strategy);
      await this.tokenManager.updateTokenDecimals(token);
      let tokenDecimals = new BigNumber(10).pow(this.tokenManager.getTokenDecimals(token));
      let rawAmountInTokens = (await yieldContract.callStatic.getTokensForShares(shares, token)).toString();
      let amountInTokens = new BigNumber(rawAmountInTokens).div(tokenDecimals);
      let allocatedAmountToCreditLines = new BigNumber(0);

      let filteredAllowancesByToken = allowances.filter((a) => a.token == token);
      if (filteredAllowancesByToken.length > 0) {
        allocatedAmountToCreditLines = new BigNumber(filteredAllowancesByToken[0].amount);
        allocatedAmountToCreditLines = allocatedAmountToCreditLines.div(tokenDecimals);
      }

      let price = tokenPrice[token];
      if (!price) {
        price = await this.tokenManager.getPricePerAsset(token);
        tokenPrice[token] = price;
      }
      let amount = new BigNumber(amountInTokens).multipliedBy(price);

      let apr = await this.getAPR(strategy);

      if (savingsAccountUserDetails.balances[tokenIndex[token]]?.token != token) {
        tokenIndex[token] = savingsAccountUserDetails.balances.length;
        savingsAccountUserDetails.balances.push({
          token,
          balanceUSD: new BigNumber(0),
          balance: new BigNumber(0),
          amountAllocatedToCreditLines: new BigNumber(allocatedAmountToCreditLines),
          strategyBalance: [],
          APR: new BigNumber(0),
        });
      }

      // 2 elemets with same strategy and token can't exist
      if (strategyIndex[token][strategy]) {
        console.log(savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance[strategyIndex[token][strategy]]);
        throw new Error('2 entities in subgraph for same token and strategy');
      }
      strategyIndex[token][strategy] = savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance.length;
      savingsAccountUserDetails.balances[tokenIndex[token]].strategyBalance[strategyIndex[token][strategy]] = {
        strategy,
        balanceUSD: new BigNumber(amount),
        balance: new BigNumber(amountInTokens),
        APR: apr,
      };

      savingsAccountUserDetails.balances[tokenIndex[token]].APR = savingsAccountUserDetails.balances[tokenIndex[token]].APR.multipliedBy(
        savingsAccountUserDetails.totalBalance
      )
        .plus(apr.multipliedBy(new BigNumber(amount)))
        .div(savingsAccountUserDetails.totalBalance.plus(amount));
      savingsAccountUserDetails.balances[tokenIndex[token]].balance =
        savingsAccountUserDetails.balances[tokenIndex[token]].balance.plus(amountInTokens);
      savingsAccountUserDetails.balances[tokenIndex[token]].balanceUSD =
        savingsAccountUserDetails.balances[tokenIndex[token]].balanceUSD.plus(amount);
      savingsAccountUserDetails.totalBalance = savingsAccountUserDetails.totalBalance.plus(amount);
    }

    let savingAccountsUserDetailsDisplay = {} as SavingAccountUserDetailDisplay;
    // return savingsAccountUserDetails;

    savingAccountsUserDetailsDisplay.user = savingsAccountUserDetails.user;
    savingAccountsUserDetailsDisplay.totalBalance = savingsAccountUserDetails.totalBalance.toFixed(2);
    savingAccountsUserDetailsDisplay.balances = [];
    savingsAccountUserDetails.balances.forEach((a) => {
      let strategyBalance: [SavingsAccountStrategyBalanceDisplay?] = [];
      a.strategyBalance.forEach((b) => {
        strategyBalance.push({
          strategy: { address: b.strategy, type: this.yieldApi.getStrategy(b.strategy) },
          balance: b.balance.toFixed(2),
          balanceUSD: b.balanceUSD.toFixed(2),
          APR: b.APR.toFixed(2),
        });
      });

      savingAccountsUserDetailsDisplay.balances.push({
        token: a.token,
        balance: a.balance.toFixed(2),
        amountAllocatedToCreditLines: a.amountAllocatedToCreditLines.toFixed(2),
        balanceUSD: a.balanceUSD.toFixed(2),
        APR: a.APR.toFixed(2),
        strategyBalance,
      });
    });

    return savingAccountsUserDetailsDisplay;
  }

  /**
   *
   * @param address: address of the user to query
   * @description Returns savings account overview for a user address
   */
  async getSavingsAccountOverview(address: string): Promise<SavingAccountUserDetailDisplay> {
    let balances = await getBalances(this.subgraphUrl, address);
    let savingsAccountUserDetails = await this.transformToSavingsAccountUserDetails(address, balances);

    return savingsAccountUserDetails;
  }

  /**
   * @param address: address of the user to query
   * @description Return the dashboard view type for a user
   */
  async getDashboardOverview(address: string): Promise<DashboardOverview> {
    return {
      totalBorrowedAmount: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2),
      totalLentAmount: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2),
      totalBorrowRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
      totalLentRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
    };
  }

  /**
   * @param address: address of the user to query
   * @description Returns the credit lines overview of the user
   */
  async getCreditLinesOverview(address: string): Promise<CreditLinesOverview> {
    let creditLineAsborrower = await this.getConfirmedCreditLinesOfBorrower(address, 10, 0);
    let creditLineAsLender = await this.getConfirmedCreditLinesOfLender(address, 10, 0);

    let creditGranted = new BigNumber(0);
    let interestAccrued = new BigNumber(0);
    let activeCredit = new BigNumber(0);
    let interestRate = new BigNumber(0);

    let borrowedCreditLines = creditLineAsborrower.length;

    for (let i = 0; i < creditLineAsLender.length; i++) {
      let borrowAsset = creditLineAsLender[i].borrowAsset;
      let principal = new BigNumber(creditLineAsLender[i].principal);
      let assetPrice = await this.tokenManager.getPricePerAsset(borrowAsset.toString());
      creditGranted = creditGranted.plus(principal.multipliedBy(assetPrice));
    }

    for (let i = 0; i < creditLineAsborrower.length; i++) {
      let interest = creditLineAsborrower[i].interestRate;
      let accruedInterest = creditLineAsborrower[i].interestAccrued;

      if (creditLineAsborrower[i].type == 'ACTIVE') {
        let credit = new BigNumber(creditLineAsborrower[i].principal);
        let price = await this.tokenManager.getPricePerAsset(creditLineAsLender[i].borrowAsset.toString());
        activeCredit = activeCredit.plus(credit.multipliedBy(price));
      }

      interestAccrued = interestAccrued.plus(accruedInterest);
      interestRate = interestRate.plus(interest);
    }

    if (borrowedCreditLines > 0) {
      interestRate = interestRate.div(borrowedCreditLines);
    } else {
      interestRate = new BigNumber(0);
    }

    return {
      creditGranted: creditGranted.toFixed(2),
      interestAccrued: interestAccrued.toFixed(2),
      activeCredit: activeCredit.toFixed(2),
      interestRate: interestRate.toFixed(2),
    };
  }

  /**
   * @param address: address of the user to query
   * @description Return the profiel overview of the user
   */
  async getProfileOverview(address: string): Promise<ProfileOverview> {
    let pools = await this.getPoolByBorrower(address);
    let poolsCreated = pools.length;
    let activePools = pools.filter((a) => a.poolType === 'Active').length;
    let timesDefaulted = pools.filter((a) => a.poolType === 'Defaulted').length;
    let totalAmountInBorrow = new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2);

    return {
      poolsCreated: poolsCreated.toString(),
      activePools: activePools.toString(),
      timesDefaulted: timesDefaulted.toString(),
      totalAmountInBorrow,
    };
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a borrower
   */
  async getConfirmedCreditLinesOfBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a lender
   */
  async getConfirmedCreditLinesOfLender(lender: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requested by the lender but not accepted by any borrower
   */
  async getPendingCreditlinesRequestedByLender(lender: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditlinesRequestedByLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender
   */
  async getPendingCreditLinesRequestedByBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedByBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a lender by all other borrowers
   */
  async getPendingCreditLinesRequestedToLender(lender: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedToLender(this.subgraphUrl, lender, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a borrower by all other lenders
   */
  async getPendingCreditLinesRequestedToBorrower(borrower: string, count: Number, skip: Number): Promise<CreditLineDetail[]> {
    let result = await getPendingCreditLinesRequestedToBorrower(this.subgraphUrl, borrower, count, skip);
    return await this.transformToCreditLine(result);
  }

  /**
   * @param id
   * @description returns a detailed information of a single credit line.
   */
  async getCreditLine(id: string): Promise<CreditLineDetail> {
    let result = await getCreditLine(this.subgraphUrl, id);
    let data = await this.transformToCreditLine(result);
    if (data.length == 0) {
      return null;
    } else {
      return data[0];
    }
  }

  /**
   * @param creditLine
   * @description returns the operations made on a credit line in time-wise order
   */
  async getCreditLineTimeline(creditLine: string): Promise<CreditLineOperation[]> {
    let result = await getCreditLineTimeline(this.subgraphUrl, creditLine);
    if (result.data.creditLines.length == 0) {
      return [];
    } else {
      let cl = result.data.creditLines[0];
      return await this.transformToCreditLineOperations(cl);
    }
  }

  async getAllowances(): Promise<any[]> {
    let result = await getAllowances(this.subgraphUrl, await this.signer.getAddress(), this.sublimeAddresses.creditLineContractAddress);
    return result;
  }
  /**
   *
   * @param cl
   * @description Transforms the data received from the subgraph into type
   */
  private async transformToCreditLineOperations(cl: any): Promise<CreditLineOperation[]> {
    await this.tokenManager.updateAll(cl.borrowAsset);
    let operations: CreditLineOperation[] = cl.creditLineTimeline.map((a) => {
      return {
        amount: a.amount
          ? new BigNumber(a.amount).div(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(cl.borrowAsset))).toFixed(2)
          : null,
        creditLineOperation: a.creditLineOperation,
        liquidator: a.liquidator,
        strategy: a.strategy,
        timestamp: a.timestamp,
        id: a.id,
      };
    });
    return operations;
  }

  /**
   * @param max
   * @description Function to generate a random decimals in range (0, max)
   */
  private getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

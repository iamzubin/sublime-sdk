/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface IRepaymentInterface extends ethers.utils.Interface {
  functions: {
    'didBorrowerDefault(address)': FunctionFragment;
    'getCurrentLoanInterval(address)': FunctionFragment;
    'getGracePeriodFraction()': FunctionFragment;
    'getInterestCalculationVars(address)': FunctionFragment;
    'getNextInstalmentDeadline(address)': FunctionFragment;
    'getTotalRepaidAmount(address)': FunctionFragment;
    'initializeRepayment(uint64,uint256,uint256,uint256,address)': FunctionFragment;
    'instalmentDeadlineExtended(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'didBorrowerDefault', values: [string]): string;
  encodeFunctionData(functionFragment: 'getCurrentLoanInterval', values: [string]): string;
  encodeFunctionData(functionFragment: 'getGracePeriodFraction', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getInterestCalculationVars', values: [string]): string;
  encodeFunctionData(functionFragment: 'getNextInstalmentDeadline', values: [string]): string;
  encodeFunctionData(functionFragment: 'getTotalRepaidAmount', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'initializeRepayment',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: 'instalmentDeadlineExtended', values: [string]): string;

  decodeFunctionResult(functionFragment: 'didBorrowerDefault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentLoanInterval', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGracePeriodFraction', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getInterestCalculationVars', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNextInstalmentDeadline', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalRepaidAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initializeRepayment', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'instalmentDeadlineExtended', data: BytesLike): Result;

  events: {
    'ExtensionRepaid(address,uint256)': EventFragment;
    'GracePenaltyRateUpdated(uint256)': EventFragment;
    'GracePenaltyRepaid(address,uint256)': EventFragment;
    'GracePeriodFractionUpdated(uint256)': EventFragment;
    'InterestRepaid(address,uint256)': EventFragment;
    'InterestRepaymentComplete(address,uint256)': EventFragment;
    'PoolFactoryUpdated(address)': EventFragment;
    'PrincipalRepaid(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ExtensionRepaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GracePenaltyRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GracePenaltyRepaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GracePeriodFractionUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InterestRepaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InterestRepaymentComplete'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolFactoryUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PrincipalRepaid'): EventFragment;
}

export class IRepayment extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRepaymentInterface;

  functions: {
    didBorrowerDefault(_poolID: string, overrides?: CallOverrides): Promise<[boolean] & { isBorrowerDefaulter: boolean }>;

    'didBorrowerDefault(address)'(_poolID: string, overrides?: CallOverrides): Promise<[boolean] & { isBorrowerDefaulter: boolean }>;

    getCurrentLoanInterval(poolID: string, overrides?: CallOverrides): Promise<[BigNumber] & { scaledCurrentInterval: BigNumber }>;

    'getCurrentLoanInterval(address)'(
      poolID: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledCurrentInterval: BigNumber }>;

    getGracePeriodFraction(overrides?: CallOverrides): Promise<[BigNumber] & { gracePeriod: BigNumber }>;

    'getGracePeriodFraction()'(overrides?: CallOverrides): Promise<[BigNumber] & { gracePeriod: BigNumber }>;

    getInterestCalculationVars(
      poolID: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        loanDurationCovered: BigNumber;
        interestPerSecond: BigNumber;
      }
    >;

    'getInterestCalculationVars(address)'(
      poolID: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        loanDurationCovered: BigNumber;
        interestPerSecond: BigNumber;
      }
    >;

    getNextInstalmentDeadline(
      _poolID: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nextInstalmentDeadlineTimestamp: BigNumber }>;

    'getNextInstalmentDeadline(address)'(
      _poolID: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nextInstalmentDeadlineTimestamp: BigNumber }>;

    getTotalRepaidAmount(poolID: string, overrides?: CallOverrides): Promise<[BigNumber] & { amountRepaid: BigNumber }>;

    'getTotalRepaidAmount(address)'(poolID: string, overrides?: CallOverrides): Promise<[BigNumber] & { amountRepaid: BigNumber }>;

    initializeRepayment(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'initializeRepayment(uint64,uint256,uint256,uint256,address)'(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    instalmentDeadlineExtended(_poolID: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'instalmentDeadlineExtended(address)'(
      _poolID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  didBorrowerDefault(_poolID: string, overrides?: CallOverrides): Promise<boolean>;

  'didBorrowerDefault(address)'(_poolID: string, overrides?: CallOverrides): Promise<boolean>;

  getCurrentLoanInterval(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentLoanInterval(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  getGracePeriodFraction(overrides?: CallOverrides): Promise<BigNumber>;

  'getGracePeriodFraction()'(overrides?: CallOverrides): Promise<BigNumber>;

  getInterestCalculationVars(
    poolID: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      loanDurationCovered: BigNumber;
      interestPerSecond: BigNumber;
    }
  >;

  'getInterestCalculationVars(address)'(
    poolID: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      loanDurationCovered: BigNumber;
      interestPerSecond: BigNumber;
    }
  >;

  getNextInstalmentDeadline(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getNextInstalmentDeadline(address)'(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  getTotalRepaidAmount(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getTotalRepaidAmount(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

  initializeRepayment(
    numberOfTotalRepayments: BigNumberish,
    repaymentInterval: BigNumberish,
    borrowRate: BigNumberish,
    loanStartTime: BigNumberish,
    lentAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'initializeRepayment(uint64,uint256,uint256,uint256,address)'(
    numberOfTotalRepayments: BigNumberish,
    repaymentInterval: BigNumberish,
    borrowRate: BigNumberish,
    loanStartTime: BigNumberish,
    lentAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  instalmentDeadlineExtended(_poolID: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'instalmentDeadlineExtended(address)'(
    _poolID: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    didBorrowerDefault(_poolID: string, overrides?: CallOverrides): Promise<boolean>;

    'didBorrowerDefault(address)'(_poolID: string, overrides?: CallOverrides): Promise<boolean>;

    getCurrentLoanInterval(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentLoanInterval(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getGracePeriodFraction(overrides?: CallOverrides): Promise<BigNumber>;

    'getGracePeriodFraction()'(overrides?: CallOverrides): Promise<BigNumber>;

    getInterestCalculationVars(
      poolID: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        loanDurationCovered: BigNumber;
        interestPerSecond: BigNumber;
      }
    >;

    'getInterestCalculationVars(address)'(
      poolID: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        loanDurationCovered: BigNumber;
        interestPerSecond: BigNumber;
      }
    >;

    getNextInstalmentDeadline(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getNextInstalmentDeadline(address)'(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRepaidAmount(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getTotalRepaidAmount(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    initializeRepayment(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    'initializeRepayment(uint64,uint256,uint256,uint256,address)'(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    instalmentDeadlineExtended(_poolID: string, overrides?: CallOverrides): Promise<void>;

    'instalmentDeadlineExtended(address)'(_poolID: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ExtensionRepaid(
      poolID: string | null,
      repayAmount: null
    ): TypedEventFilter<[string, BigNumber], { poolID: string; repayAmount: BigNumber }>;

    GracePenaltyRateUpdated(gracePenaltyRate: BigNumberish | null): TypedEventFilter<[BigNumber], { gracePenaltyRate: BigNumber }>;

    GracePenaltyRepaid(
      poolID: string | null,
      repayAmount: null
    ): TypedEventFilter<[string, BigNumber], { poolID: string; repayAmount: BigNumber }>;

    GracePeriodFractionUpdated(gracePeriodFraction: BigNumberish | null): TypedEventFilter<[BigNumber], { gracePeriodFraction: BigNumber }>;

    InterestRepaid(
      poolID: string | null,
      repayAmount: null
    ): TypedEventFilter<[string, BigNumber], { poolID: string; repayAmount: BigNumber }>;

    InterestRepaymentComplete(
      poolID: string | null,
      repayAmount: null
    ): TypedEventFilter<[string, BigNumber], { poolID: string; repayAmount: BigNumber }>;

    PoolFactoryUpdated(poolFactory: string | null): TypedEventFilter<[string], { poolFactory: string }>;

    PrincipalRepaid(
      poolID: string | null,
      repayAmount: null
    ): TypedEventFilter<[string, BigNumber], { poolID: string; repayAmount: BigNumber }>;
  };

  estimateGas: {
    didBorrowerDefault(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'didBorrowerDefault(address)'(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentLoanInterval(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentLoanInterval(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getGracePeriodFraction(overrides?: CallOverrides): Promise<BigNumber>;

    'getGracePeriodFraction()'(overrides?: CallOverrides): Promise<BigNumber>;

    getInterestCalculationVars(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getInterestCalculationVars(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getNextInstalmentDeadline(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getNextInstalmentDeadline(address)'(_poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalRepaidAmount(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getTotalRepaidAmount(address)'(poolID: string, overrides?: CallOverrides): Promise<BigNumber>;

    initializeRepayment(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'initializeRepayment(uint64,uint256,uint256,uint256,address)'(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    instalmentDeadlineExtended(_poolID: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'instalmentDeadlineExtended(address)'(_poolID: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    didBorrowerDefault(_poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'didBorrowerDefault(address)'(_poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentLoanInterval(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getCurrentLoanInterval(address)'(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGracePeriodFraction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getGracePeriodFraction()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInterestCalculationVars(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getInterestCalculationVars(address)'(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextInstalmentDeadline(_poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getNextInstalmentDeadline(address)'(_poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalRepaidAmount(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getTotalRepaidAmount(address)'(poolID: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeRepayment(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'initializeRepayment(uint64,uint256,uint256,uint256,address)'(
      numberOfTotalRepayments: BigNumberish,
      repaymentInterval: BigNumberish,
      borrowRate: BigNumberish,
      loanStartTime: BigNumberish,
      lentAsset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    instalmentDeadlineExtended(_poolID: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'instalmentDeadlineExtended(address)'(
      _poolID: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

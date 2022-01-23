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
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface ISavingsAccountInterface extends ethers.utils.Interface {
  functions: {
    'approve(uint256,address,address)': FunctionFragment;
    'balanceInShares(address,address,address)': FunctionFragment;
    'decreaseAllowance(uint256,address,address)': FunctionFragment;
    'deposit(uint256,address,address,address)': FunctionFragment;
    'getTotalTokens(address,address)': FunctionFragment;
    'increaseAllowance(uint256,address,address)': FunctionFragment;
    'increaseAllowanceToCreditLine(uint256,address,address)': FunctionFragment;
    'switchStrategy(uint256,address,address,address)': FunctionFragment;
    'transfer(uint256,address,address,address)': FunctionFragment;
    'transferFrom(uint256,address,address,address,address)': FunctionFragment;
    'withdraw(uint256,address,address,address,bool)': FunctionFragment;
    'withdrawAll(address,address)': FunctionFragment;
    'withdrawFrom(uint256,address,address,address,address,bool)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'approve', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'balanceInShares', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'decreaseAllowance', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish, string, string, string]): string;
  encodeFunctionData(functionFragment: 'getTotalTokens', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'increaseAllowance', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'increaseAllowanceToCreditLine', values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: 'switchStrategy', values: [BigNumberish, string, string, string]): string;
  encodeFunctionData(functionFragment: 'transfer', values: [BigNumberish, string, string, string]): string;
  encodeFunctionData(functionFragment: 'transferFrom', values: [BigNumberish, string, string, string, string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, string, string, string, boolean]): string;
  encodeFunctionData(functionFragment: 'withdrawAll', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'withdrawFrom', values: [BigNumberish, string, string, string, string, boolean]): string;

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceInShares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowanceToCreditLine', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'switchStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawFrom', data: BytesLike): Result;

  events: {
    'Approved(address,address,address,uint256)': EventFragment;
    'CreditLineAllowanceRefreshed(address,address,address,uint256)': EventFragment;
    'CreditLineUpdated(address)': EventFragment;
    'Deposited(address,uint256,address,address)': EventFragment;
    'StrategyRegistryUpdated(address)': EventFragment;
    'StrategySwitched(address,address,uint256,uint256,address,address)': EventFragment;
    'Transfer(address,address,address,address,uint256)': EventFragment;
    'Withdrawn(address,address,uint256,address,address,bool)': EventFragment;
    'WithdrawnAll(address,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CreditLineAllowanceRefreshed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CreditLineUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposited'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyRegistryUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategySwitched'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawnAll'): EventFragment;
}

export class ISavingsAccount extends Contract {
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

  interface: ISavingsAccountInterface;

  functions: {
    approve(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'approve(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceInShares(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceInShares(address,address,address)'(
      user: string,
      token: string,
      strategy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decreaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'decreaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'deposit(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTotalTokens(
      _user: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'getTotalTokens(address,address)'(
      _user: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'increaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowanceToCreditLine(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'increaseAllowanceToCreditLine(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    switchStrategy(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'switchStrategy(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transfer(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'transfer(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'transferFrom(uint256,address,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'withdraw(uint256,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'withdrawAll(address,address)'(
      token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'withdrawAll(address)'(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    withdrawFrom(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'withdrawFrom(uint256,address,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'approve(uint256,address,address)'(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceInShares(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceInShares(address,address,address)'(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

  decreaseAllowance(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'decreaseAllowance(uint256,address,address)'(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: BigNumberish,
    token: string,
    strategy: string,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'deposit(uint256,address,address,address)'(
    amount: BigNumberish,
    token: string,
    strategy: string,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTotalTokens(_user: string, _token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'getTotalTokens(address,address)'(
    _user: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'increaseAllowance(uint256,address,address)'(
    amount: BigNumberish,
    token: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowanceToCreditLine(
    amount: BigNumberish,
    token: string,
    from: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'increaseAllowanceToCreditLine(uint256,address,address)'(
    amount: BigNumberish,
    token: string,
    from: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  switchStrategy(
    amount: BigNumberish,
    token: string,
    currentStrategy: string,
    newStrategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'switchStrategy(uint256,address,address,address)'(
    amount: BigNumberish,
    token: string,
    currentStrategy: string,
    newStrategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transfer(
    amount: BigNumberish,
    token: string,
    poolSavingsStrategy: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'transfer(uint256,address,address,address)'(
    amount: BigNumberish,
    token: string,
    poolSavingsStrategy: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    amount: BigNumberish,
    token: string,
    poolSavingsStrategy: string,
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'transferFrom(uint256,address,address,address,address)'(
    amount: BigNumberish,
    token: string,
    poolSavingsStrategy: string,
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    token: string,
    strategy: string,
    withdrawTo: string,
    withdrawShares: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'withdraw(uint256,address,address,address,bool)'(
    amount: BigNumberish,
    token: string,
    strategy: string,
    withdrawTo: string,
    withdrawShares: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'withdrawAll(address,address)'(
    token: string,
    strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'withdrawAll(address)'(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  withdrawFrom(
    amount: BigNumberish,
    token: string,
    strategy: string,
    from: string,
    to: string,
    withdrawShares: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'withdrawFrom(uint256,address,address,address,address,bool)'(
    amount: BigNumberish,
    token: string,
    strategy: string,
    from: string,
    to: string,
    withdrawShares: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    'approve(uint256,address,address)'(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    balanceInShares(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceInShares(address,address,address)'(
      user: string,
      token: string,
      strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseAllowance(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    'decreaseAllowance(uint256,address,address)'(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    deposit(amount: BigNumberish, token: string, strategy: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;

    'deposit(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalTokens(_user: string, _token: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getTotalTokens(address,address)'(_user: string, _token: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    'increaseAllowance(uint256,address,address)'(amount: BigNumberish, token: string, to: string, overrides?: CallOverrides): Promise<void>;

    increaseAllowanceToCreditLine(amount: BigNumberish, token: string, from: string, overrides?: CallOverrides): Promise<void>;

    'increaseAllowanceToCreditLine(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: CallOverrides
    ): Promise<void>;

    switchStrategy(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    'switchStrategy(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer(amount: BigNumberish, token: string, poolSavingsStrategy: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;

    'transfer(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'transferFrom(uint256,address,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'withdraw(uint256,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'withdrawAll(address,address)'(token: string, strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    'withdrawAll(address)'(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFrom(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'withdrawFrom(uint256,address,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approved(
      token: string | null,
      from: string | null,
      to: string | null,
      amount: null
    ): TypedEventFilter<[string, string, string, BigNumber], { token: string; from: string; to: string; amount: BigNumber }>;

    CreditLineAllowanceRefreshed(
      token: string | null,
      from: string | null,
      to: string | null,
      amount: null
    ): TypedEventFilter<[string, string, string, BigNumber], { token: string; from: string; to: string; amount: BigNumber }>;

    CreditLineUpdated(updatedCreditLine: string | null): TypedEventFilter<[string], { updatedCreditLine: string }>;

    Deposited(
      user: string | null,
      sharesReceived: null,
      token: string | null,
      strategy: string | null
    ): TypedEventFilter<
      [string, BigNumber, string, string],
      {
        user: string;
        sharesReceived: BigNumber;
        token: string;
        strategy: string;
      }
    >;

    StrategyRegistryUpdated(updatedStrategyRegistry: string | null): TypedEventFilter<[string], { updatedStrategyRegistry: string }>;

    StrategySwitched(
      user: string | null,
      token: string | null,
      sharesDecreasedInCurrentStrategy: null,
      sharesIncreasedInNewStrategy: null,
      currentStrategy: null,
      newStrategy: string | null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        user: string;
        token: string;
        sharesDecreasedInCurrentStrategy: BigNumber;
        sharesIncreasedInNewStrategy: BigNumber;
        currentStrategy: string;
        newStrategy: string;
      }
    >;

    Transfer(
      token: string | null,
      strategy: null,
      from: string | null,
      to: string | null,
      amount: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        token: string;
        strategy: string;
        from: string;
        to: string;
        amount: BigNumber;
      }
    >;

    Withdrawn(
      from: string | null,
      to: string | null,
      sharesWithdrawn: null,
      token: string | null,
      strategy: null,
      withdrawShares: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, string, boolean],
      {
        from: string;
        to: string;
        sharesWithdrawn: BigNumber;
        token: string;
        strategy: string;
        withdrawShares: boolean;
      }
    >;

    WithdrawnAll(
      user: string | null,
      tokenReceived: null,
      token: string | null
    ): TypedEventFilter<[string, BigNumber, string], { user: string; tokenReceived: BigNumber; token: string }>;
  };

  estimateGas: {
    approve(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'approve(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceInShares(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceInShares(address,address,address)'(
      user: string,
      token: string,
      strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'decreaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'deposit(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTotalTokens(_user: string, _token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'getTotalTokens(address,address)'(
      _user: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'increaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowanceToCreditLine(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'increaseAllowanceToCreditLine(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    switchStrategy(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'switchStrategy(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transfer(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'transfer(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'transferFrom(uint256,address,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'withdraw(uint256,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'withdrawAll(address,address)'(
      token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'withdrawAll(address)'(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    withdrawFrom(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'withdrawFrom(uint256,address,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'approve(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceInShares(user: string, token: string, strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'balanceInShares(address,address,address)'(
      user: string,
      token: string,
      strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'decreaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'deposit(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTotalTokens(
      _user: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'getTotalTokens(address,address)'(
      _user: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'increaseAllowance(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowanceToCreditLine(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'increaseAllowanceToCreditLine(uint256,address,address)'(
      amount: BigNumberish,
      token: string,
      from: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    switchStrategy(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'switchStrategy(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      currentStrategy: string,
      newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transfer(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'transfer(uint256,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'transferFrom(uint256,address,address,address,address)'(
      amount: BigNumberish,
      token: string,
      poolSavingsStrategy: string,
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'withdraw(uint256,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      withdrawTo: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'withdrawAll(address,address)'(
      token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'withdrawAll(address)'(token: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    withdrawFrom(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'withdrawFrom(uint256,address,address,address,address,bool)'(
      amount: BigNumberish,
      token: string,
      strategy: string,
      from: string,
      to: string,
      withdrawShares: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

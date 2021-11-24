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

interface IStrategyRegistryInterface extends ethers.utils.Interface {
  functions: {
    'addStrategy(address)': FunctionFragment;
    'getStrategies()': FunctionFragment;
    'registry(address)': FunctionFragment;
    'removeStrategy(uint256)': FunctionFragment;
    'updateStrategy(uint256,address,address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'addStrategy', values: [string]): string;
  encodeFunctionData(functionFragment: 'getStrategies', values?: undefined): string;
  encodeFunctionData(functionFragment: 'registry', values: [string]): string;
  encodeFunctionData(functionFragment: 'removeStrategy', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updateStrategy', values: [BigNumberish, string, string]): string;

  decodeFunctionResult(functionFragment: 'addStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStrategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateStrategy', data: BytesLike): Result;

  events: {
    'MaxStrategiesUpdated(uint256)': EventFragment;
    'StrategyAdded(address)': EventFragment;
    'StrategyRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'MaxStrategiesUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyRemoved'): EventFragment;
}

export class IStrategyRegistry extends Contract {
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

  interface: IStrategyRegistryInterface;

  functions: {
    addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getStrategies(overrides?: CallOverrides): Promise<[string[]]>;

    'getStrategies()'(overrides?: CallOverrides): Promise<[string[]]>;

    registry(_strategy: string, overrides?: CallOverrides): Promise<[boolean]>;

    'registry(address)'(_strategy: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateStrategy(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'updateStrategy(uint256,address,address)'(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  getStrategies(overrides?: CallOverrides): Promise<string[]>;

  'getStrategies()'(overrides?: CallOverrides): Promise<string[]>;

  registry(_strategy: string, overrides?: CallOverrides): Promise<boolean>;

  'registry(address)'(_strategy: string, overrides?: CallOverrides): Promise<boolean>;

  removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'removeStrategy(uint256)'(
    _strategyIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateStrategy(
    _strategyIndex: BigNumberish,
    _oldStrategy: string,
    _newStrategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'updateStrategy(uint256,address,address)'(
    _strategyIndex: BigNumberish,
    _oldStrategy: string,
    _newStrategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addStrategy(_strategy: string, overrides?: CallOverrides): Promise<void>;

    'addStrategy(address)'(_strategy: string, overrides?: CallOverrides): Promise<void>;

    getStrategies(overrides?: CallOverrides): Promise<string[]>;

    'getStrategies()'(overrides?: CallOverrides): Promise<string[]>;

    registry(_strategy: string, overrides?: CallOverrides): Promise<boolean>;

    'registry(address)'(_strategy: string, overrides?: CallOverrides): Promise<boolean>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'removeStrategy(uint256)'(_strategyIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateStrategy(_strategyIndex: BigNumberish, _oldStrategy: string, _newStrategy: string, overrides?: CallOverrides): Promise<void>;

    'updateStrategy(uint256,address,address)'(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    MaxStrategiesUpdated(maxStrategies: null): TypedEventFilter<[BigNumber], { maxStrategies: BigNumber }>;

    StrategyAdded(strategy: string | null): TypedEventFilter<[string], { strategy: string }>;

    StrategyRemoved(strategy: string | null): TypedEventFilter<[string], { strategy: string }>;
  };

  estimateGas: {
    addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    'getStrategies()'(overrides?: CallOverrides): Promise<BigNumber>;

    registry(_strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    'registry(address)'(_strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateStrategy(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'updateStrategy(uint256,address,address)'(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    getStrategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getStrategies()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(_strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'registry(address)'(_strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeStrategy(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateStrategy(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'updateStrategy(uint256,address,address)'(
      _strategyIndex: BigNumberish,
      _oldStrategy: string,
      _newStrategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

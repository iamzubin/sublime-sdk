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

interface StrategyRegistryInterface extends ethers.utils.Interface {
  functions: {
    'addStrategy(address)': FunctionFragment;
    'getStrategies()': FunctionFragment;
    'initialize(address,uint256)': FunctionFragment;
    'maxStrategies()': FunctionFragment;
    'owner()': FunctionFragment;
    'registry(address)': FunctionFragment;
    'removeStrategy(uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'strategies(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateMaxStrategies(uint256)': FunctionFragment;
    'updateStrategy(uint256,address,address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'addStrategy', values: [string]): string;
  encodeFunctionData(functionFragment: 'getStrategies', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'maxStrategies', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'registry', values: [string]): string;
  encodeFunctionData(functionFragment: 'removeStrategy', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'strategies', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'updateMaxStrategies', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updateStrategy', values: [BigNumberish, string, string]): string;

  decodeFunctionResult(functionFragment: 'addStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStrategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxStrategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'strategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateMaxStrategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateStrategy', data: BytesLike): Result;

  events: {
    'MaxStrategiesUpdated(uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'StrategyAdded(address)': EventFragment;
    'StrategyRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'MaxStrategiesUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'StrategyRemoved'): EventFragment;
}

export class StrategyRegistry extends Contract {
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

  interface: StrategyRegistryInterface;

  functions: {
    addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getStrategies(overrides?: CallOverrides): Promise<[string[]]>;

    'getStrategies()'(overrides?: CallOverrides): Promise<[string[]]>;

    initialize(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'initialize(address,uint256)'(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxStrategies(overrides?: CallOverrides): Promise<[BigNumber]>;

    'maxStrategies()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    registry(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    'registry(address)'(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    strategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    'strategies(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMaxStrategies(
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'updateMaxStrategies(uint256)'(
      _maxStrategies: BigNumberish,
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

  initialize(
    _owner: string,
    _maxStrategies: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'initialize(address,uint256)'(
    _owner: string,
    _maxStrategies: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxStrategies(overrides?: CallOverrides): Promise<BigNumber>;

  'maxStrategies()'(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  registry(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  'registry(address)'(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'removeStrategy(uint256)'(
    _strategyIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  strategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  'strategies(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  updateMaxStrategies(
    _maxStrategies: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'updateMaxStrategies(uint256)'(
    _maxStrategies: BigNumberish,
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

    initialize(_owner: string, _maxStrategies: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'initialize(address,uint256)'(_owner: string, _maxStrategies: BigNumberish, overrides?: CallOverrides): Promise<void>;

    maxStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    'maxStrategies()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    registry(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    'registry(address)'(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'removeStrategy(uint256)'(_strategyIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    strategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    'strategies(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateMaxStrategies(_maxStrategies: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'updateMaxStrategies(uint256)'(_maxStrategies: BigNumberish, overrides?: CallOverrides): Promise<void>;

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

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    StrategyAdded(strategy: string | null): TypedEventFilter<[string], { strategy: string }>;

    StrategyRemoved(strategy: string | null): TypedEventFilter<[string], { strategy: string }>;
  };

  estimateGas: {
    addStrategy(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'addStrategy(address)'(_strategy: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    'getStrategies()'(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'initialize(address,uint256)'(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    'maxStrategies()'(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    registry(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'registry(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeStrategy(_strategyIndex: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    strategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'strategies(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    updateMaxStrategies(_maxStrategies: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'updateMaxStrategies(uint256)'(
      _maxStrategies: BigNumberish,
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

    initialize(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'initialize(address,uint256)'(
      _owner: string,
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxStrategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'maxStrategies()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'registry(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeStrategy(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'removeStrategy(uint256)'(
      _strategyIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    strategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'strategies(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMaxStrategies(
      _maxStrategies: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'updateMaxStrategies(uint256)'(
      _maxStrategies: BigNumberish,
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

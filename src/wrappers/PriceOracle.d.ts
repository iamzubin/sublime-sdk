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

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    'chainlinkFeedAddresses(address)': FunctionFragment;
    'doesFeedExist(address,address)': FunctionFragment;
    'getChainlinkLatestPrice(address,address)': FunctionFragment;
    'getLatestPrice(address,address)': FunctionFragment;
    'getUniswapLatestPrice(address,address)': FunctionFragment;
    'initialize(address,address)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setChainlinkFeedAddress(address,address)': FunctionFragment;
    'setUniswapFeedAddress(address,address,address)': FunctionFragment;
    'setUniswapPriceAveragingPeriod(uint32)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'uniswapPools(bytes32)': FunctionFragment;
    'weth()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'chainlinkFeedAddresses', values: [string]): string;
  encodeFunctionData(functionFragment: 'doesFeedExist', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getChainlinkLatestPrice', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getLatestPrice', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getUniswapLatestPrice', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setChainlinkFeedAddress', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'setUniswapFeedAddress', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'setUniswapPriceAveragingPeriod', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'uniswapPools', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'weth', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'chainlinkFeedAddresses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'doesFeedExist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getChainlinkLatestPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLatestPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUniswapLatestPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setChainlinkFeedAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setUniswapFeedAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setUniswapPriceAveragingPeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'uniswapPools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'weth', data: BytesLike): Result;

  events: {
    'ChainlinkFeedUpdated(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'UniswapFeedUpdated(address,address,bytes32,address)': EventFragment;
    'UniswapPriceAveragingPeriodUpdated(uint32)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ChainlinkFeedUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UniswapFeedUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UniswapPriceAveragingPeriodUpdated'): EventFragment;
}

export class PriceOracle extends Contract {
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

  interface: PriceOracleInterface;

  functions: {
    chainlinkFeedAddresses(arg0: string, overrides?: CallOverrides): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

    'chainlinkFeedAddresses(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<[boolean]>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<[boolean]>;

    getChainlinkLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getChainlinkLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getUniswapLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getUniswapLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    initialize(_admin: string, _weth: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'initialize(address,address)'(
      _admin: string,
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    'owner()'(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setChainlinkFeedAddress(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'setChainlinkFeedAddress(address,address)'(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUniswapFeedAddress(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'setUniswapFeedAddress(address,address,address)'(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUniswapPriceAveragingPeriod(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'setUniswapPriceAveragingPeriod(uint32)'(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapPools(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    'uniswapPools(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    'weth()'(overrides?: CallOverrides): Promise<[string]>;
  };

  chainlinkFeedAddresses(arg0: string, overrides?: CallOverrides): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

  'chainlinkFeedAddresses(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

  doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

  'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

  getChainlinkLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  'getChainlinkLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  getUniswapLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  'getUniswapLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  initialize(_admin: string, _weth: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'initialize(address,address)'(
    _admin: string,
    _weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  'owner()'(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setChainlinkFeedAddress(
    token: string,
    priceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'setChainlinkFeedAddress(address,address)'(
    token: string,
    priceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUniswapFeedAddress(
    token1: string,
    token2: string,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'setUniswapFeedAddress(address,address,address)'(
    token1: string,
    token2: string,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUniswapPriceAveragingPeriod(
    _uniswapPriceAveragingPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'setUniswapPriceAveragingPeriod(uint32)'(
    _uniswapPriceAveragingPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  uniswapPools(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  'uniswapPools(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  'weth()'(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    chainlinkFeedAddresses(arg0: string, overrides?: CallOverrides): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

    'chainlinkFeedAddresses(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { oracle: string; decimals: BigNumber }>;

    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<boolean>;

    getChainlinkLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getChainlinkLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getUniswapLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    'getUniswapLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    initialize(_admin: string, _weth: string, overrides?: CallOverrides): Promise<void>;

    'initialize(address,address)'(_admin: string, _weth: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    'owner()'(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    setChainlinkFeedAddress(token: string, priceOracle: string, overrides?: CallOverrides): Promise<void>;

    'setChainlinkFeedAddress(address,address)'(token: string, priceOracle: string, overrides?: CallOverrides): Promise<void>;

    setUniswapFeedAddress(token1: string, token2: string, pool: string, overrides?: CallOverrides): Promise<void>;

    'setUniswapFeedAddress(address,address,address)'(
      token1: string,
      token2: string,
      pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUniswapPriceAveragingPeriod(_uniswapPriceAveragingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'setUniswapPriceAveragingPeriod(uint32)'(_uniswapPriceAveragingPeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;

    uniswapPools(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    'uniswapPools(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    'weth()'(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ChainlinkFeedUpdated(
      token: string | null,
      priceOracle: string | null
    ): TypedEventFilter<[string, string], { token: string; priceOracle: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<[string, string], { previousOwner: string; newOwner: string }>;

    UniswapFeedUpdated(
      token1: string | null,
      token2: string | null,
      feedId: null,
      pool: string | null
    ): TypedEventFilter<[string, string, string, string], { token1: string; token2: string; feedId: string; pool: string }>;

    UniswapPriceAveragingPeriodUpdated(
      uniswapPriceAveragingPeriod: null
    ): TypedEventFilter<[number], { uniswapPriceAveragingPeriod: number }>;
  };

  estimateGas: {
    chainlinkFeedAddresses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'chainlinkFeedAddresses(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<BigNumber>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<BigNumber>;

    getChainlinkLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getChainlinkLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUniswapLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getUniswapLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_admin: string, _weth: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'initialize(address,address)'(
      _admin: string,
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setChainlinkFeedAddress(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'setChainlinkFeedAddress(address,address)'(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUniswapFeedAddress(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'setUniswapFeedAddress(address,address,address)'(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUniswapPriceAveragingPeriod(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'setUniswapPriceAveragingPeriod(uint32)'(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'transferOwnership(address)'(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    uniswapPools(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'uniswapPools(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    'weth()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chainlinkFeedAddresses(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'chainlinkFeedAddresses(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    doesFeedExist(token1: string, token2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'doesFeedExist(address,address)'(token1: string, token2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainlinkLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getChainlinkLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUniswapLatestPrice(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getUniswapLatestPrice(address,address)'(num: string, den: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(_admin: string, _weth: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'initialize(address,address)'(
      _admin: string,
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'renounceOwnership()'(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setChainlinkFeedAddress(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'setChainlinkFeedAddress(address,address)'(
      token: string,
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUniswapFeedAddress(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'setUniswapFeedAddress(address,address,address)'(
      token1: string,
      token2: string,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUniswapPriceAveragingPeriod(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'setUniswapPriceAveragingPeriod(uint32)'(
      _uniswapPriceAveragingPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapPools(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'uniswapPools(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'weth()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

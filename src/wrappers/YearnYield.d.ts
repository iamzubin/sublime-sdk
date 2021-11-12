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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface YearnYieldInterface extends ethers.utils.Interface {
  functions: {
    "emergencyWithdraw(address,address)": FunctionFragment;
    "getSharesForTokens(uint256,address)": FunctionFragment;
    "getTokensForShares(uint256,address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "liquidityToken(address)": FunctionFragment;
    "lockTokens(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "savingsAccount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockShares(address,uint256)": FunctionFragment;
    "unlockTokens(address,uint256)": FunctionFragment;
    "updateProtocolAddresses(address,address)": FunctionFragment;
    "updateSavingsAccount(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSharesForTokens",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensForShares",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "savingsAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockShares",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProtocolAddresses",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSavingsAccount",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSharesForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensForShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "savingsAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProtocolAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSavingsAccount",
    data: BytesLike
  ): Result;

  events: {
    "LockedTokens(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProtocolAddressesUpdated(address,address)": EventFragment;
    "SavingsAccountUpdated(address)": EventFragment;
    "UnlockedShares(address,uint256)": EventFragment;
    "UnlockedTokens(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LockedTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolAddressesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SavingsAccountUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockedShares"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockedTokens"): EventFragment;
}

export class YearnYield extends Contract {
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

  interface: YearnYieldInterface;

  functions: {
    emergencyWithdraw(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "emergencyWithdraw(address,address)"(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSharesForTokens(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    "getSharesForTokens(uint256,address)"(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    getTokensForShares(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "getTokensForShares(uint256,address)"(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    initialize(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityToken(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "liquidityToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lockTokens(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "lockTokens(address,address,uint256)"(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    savingsAccount(overrides?: CallOverrides): Promise<[string]>;

    "savingsAccount()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockShares(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unlockShares(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockTokens(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "unlockTokens(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProtocolAddresses(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateProtocolAddresses(address,address)"(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateSavingsAccount(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateSavingsAccount(address)"(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  emergencyWithdraw(
    _asset: string,
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "emergencyWithdraw(address,address)"(
    _asset: string,
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSharesForTokens(
    amount: BigNumberish,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSharesForTokens(uint256,address)"(
    amount: BigNumberish,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokensForShares(
    shares: BigNumberish,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTokensForShares(uint256,address)"(
    shares: BigNumberish,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _owner: string,
    _savingsAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    _owner: string,
    _savingsAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  "liquidityToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  lockTokens(
    user: string,
    asset: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "lockTokens(address,address,uint256)"(
    user: string,
    asset: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  savingsAccount(overrides?: CallOverrides): Promise<string>;

  "savingsAccount()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockShares(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unlockShares(address,uint256)"(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockTokens(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "unlockTokens(address,uint256)"(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProtocolAddresses(
    _asset: string,
    _liquidityToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateProtocolAddresses(address,address)"(
    _asset: string,
    _liquidityToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateSavingsAccount(
    _savingsAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateSavingsAccount(address)"(
    _savingsAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    emergencyWithdraw(
      _asset: string,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "emergencyWithdraw(address,address)"(
      _asset: string,
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSharesForTokens(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSharesForTokens(uint256,address)"(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokensForShares(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokensForShares(uint256,address)"(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: string,
      _savingsAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address)"(
      _owner: string,
      _savingsAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    "liquidityToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    lockTokens(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lockTokens(address,address,uint256)"(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    savingsAccount(overrides?: CallOverrides): Promise<string>;

    "savingsAccount()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockShares(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unlockShares(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockTokens(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unlockTokens(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateProtocolAddresses(
      _asset: string,
      _liquidityToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateProtocolAddresses(address,address)"(
      _asset: string,
      _liquidityToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateSavingsAccount(
      _savingsAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateSavingsAccount(address)"(
      _savingsAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    LockedTokens(
      user: string | null,
      investedTo: string | null,
      lpTokensReceived: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; investedTo: string; lpTokensReceived: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    ProtocolAddressesUpdated(
      asset: string | null,
      protocolToken: string | null
    ): TypedEventFilter<
      [string, string],
      { asset: string; protocolToken: string }
    >;

    SavingsAccountUpdated(
      savingsAccount: string | null
    ): TypedEventFilter<[string], { savingsAccount: string }>;

    UnlockedShares(
      asset: string | null,
      sharesReleased: null
    ): TypedEventFilter<
      [string, BigNumber],
      { asset: string; sharesReleased: BigNumber }
    >;

    UnlockedTokens(
      investedTo: string | null,
      collateralReceived: null
    ): TypedEventFilter<
      [string, BigNumber],
      { investedTo: string; collateralReceived: BigNumber }
    >;
  };

  estimateGas: {
    emergencyWithdraw(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "emergencyWithdraw(address,address)"(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSharesForTokens(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSharesForTokens(uint256,address)"(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokensForShares(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokensForShares(uint256,address)"(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "liquidityToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockTokens(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "lockTokens(address,address,uint256)"(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    savingsAccount(overrides?: CallOverrides): Promise<BigNumber>;

    "savingsAccount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockShares(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unlockShares(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockTokens(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "unlockTokens(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProtocolAddresses(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateProtocolAddresses(address,address)"(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateSavingsAccount(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateSavingsAccount(address)"(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    emergencyWithdraw(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "emergencyWithdraw(address,address)"(
      _asset: string,
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSharesForTokens(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSharesForTokens(uint256,address)"(
      amount: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokensForShares(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokensForShares(uint256,address)"(
      shares: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      _owner: string,
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "liquidityToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockTokens(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "lockTokens(address,address,uint256)"(
      user: string,
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    savingsAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "savingsAccount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockShares(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unlockShares(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockTokens(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "unlockTokens(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProtocolAddresses(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateProtocolAddresses(address,address)"(
      _asset: string,
      _liquidityToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateSavingsAccount(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateSavingsAccount(address)"(
      _savingsAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

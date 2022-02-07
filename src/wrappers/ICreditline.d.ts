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
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface ICreditlineInterface extends ethers.utils.Interface {
  functions: {
    'depositCollateral(uint256,uint256,address,bool)': FunctionFragment;
    'repay(uint256,uint256,bool)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'depositCollateral', values: [BigNumberish, BigNumberish, string, boolean]): string;
  encodeFunctionData(functionFragment: 'repay', values: [BigNumberish, BigNumberish, boolean]): string;

  decodeFunctionResult(functionFragment: 'depositCollateral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'repay', data: BytesLike): Result;

  events: {};
}

export class ICreditline extends Contract {
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

  interface: ICreditlineInterface;

  functions: {
    depositCollateral(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'depositCollateral(uint256,uint256,address,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'repay(uint256,uint256,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  depositCollateral(
    _id: BigNumberish,
    _amount: BigNumberish,
    _strategy: string,
    _fromSavingsAccount: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'depositCollateral(uint256,uint256,address,bool)'(
    _id: BigNumberish,
    _amount: BigNumberish,
    _strategy: string,
    _fromSavingsAccount: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay(
    _id: BigNumberish,
    _amount: BigNumberish,
    _fromSavingsAccount: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'repay(uint256,uint256,bool)'(
    _id: BigNumberish,
    _amount: BigNumberish,
    _fromSavingsAccount: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositCollateral(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    'depositCollateral(uint256,uint256,address,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    repay(_id: BigNumberish, _amount: BigNumberish, _fromSavingsAccount: boolean, overrides?: CallOverrides): Promise<void>;

    'repay(uint256,uint256,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositCollateral(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'depositCollateral(uint256,uint256,address,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'repay(uint256,uint256,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositCollateral(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'depositCollateral(uint256,uint256,address,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _strategy: string,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'repay(uint256,uint256,bool)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      _fromSavingsAccount: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

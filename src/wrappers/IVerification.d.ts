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

interface IVerificationInterface extends ethers.utils.Interface {
  functions: {
    'isUser(address,address)': FunctionFragment;
    'registerMasterAddress(address,bool)': FunctionFragment;
    'unregisterMasterAddress(address,address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'isUser', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'registerMasterAddress', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'unregisterMasterAddress', values: [string, string]): string;

  decodeFunctionResult(functionFragment: 'isUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerMasterAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unregisterMasterAddress', data: BytesLike): Result;

  events: {
    'ActivationDelayUpdated(uint256)': EventFragment;
    'AddressLinked(address,address,uint256)': EventFragment;
    'AddressLinkingRequestCancelled(address,address)': EventFragment;
    'AddressLinkingRequested(address,address)': EventFragment;
    'AddressUnlinked(address,address)': EventFragment;
    'UserRegistered(address,address,uint256)': EventFragment;
    'UserUnregistered(address,address,address)': EventFragment;
    'VerifierAdded(address)': EventFragment;
    'VerifierRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ActivationDelayUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinkingRequestCancelled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressLinkingRequested'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AddressUnlinked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserRegistered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UserUnregistered'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VerifierAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VerifierRemoved'): EventFragment;
}

export class IVerification extends Contract {
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

  interface: IVerificationInterface;

  functions: {
    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<[boolean] & { isMsgSenderUser: boolean }>;

    'isUser(address,address)'(
      _user: string,
      _verifier: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isMsgSenderUser: boolean }>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

  'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

  registerMasterAddress(
    _masterAddress: string,
    _isMasterLinked: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'registerMasterAddress(address,bool)'(
    _masterAddress: string,
    _isMasterLinked: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterMasterAddress(
    _masterAddress: string,
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'unregisterMasterAddress(address,address)'(
    _masterAddress: string,
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<boolean>;

    registerMasterAddress(_masterAddress: string, _isMasterLinked: boolean, overrides?: CallOverrides): Promise<void>;

    'registerMasterAddress(address,bool)'(_masterAddress: string, _isMasterLinked: boolean, overrides?: CallOverrides): Promise<void>;

    unregisterMasterAddress(_masterAddress: string, _verifier: string, overrides?: CallOverrides): Promise<void>;

    'unregisterMasterAddress(address,address)'(_masterAddress: string, _verifier: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ActivationDelayUpdated(activationDelay: null): TypedEventFilter<[BigNumber], { activationDelay: BigNumber }>;

    AddressLinked(
      linkedAddress: string | null,
      masterAddress: string | null,
      activatesAt: null
    ): TypedEventFilter<[string, string, BigNumber], { linkedAddress: string; masterAddress: string; activatesAt: BigNumber }>;

    AddressLinkingRequestCancelled(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    AddressLinkingRequested(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    AddressUnlinked(
      linkedAddress: string | null,
      masterAddress: string | null
    ): TypedEventFilter<[string, string], { linkedAddress: string; masterAddress: string }>;

    UserRegistered(
      masterAddress: string | null,
      verifier: string | null,
      activatesAt: null
    ): TypedEventFilter<[string, string, BigNumber], { masterAddress: string; verifier: string; activatesAt: BigNumber }>;

    UserUnregistered(
      masterAddress: string | null,
      verifier: string | null,
      unregisteredBy: string | null
    ): TypedEventFilter<[string, string, string], { masterAddress: string; verifier: string; unregisteredBy: string }>;

    VerifierAdded(verifier: string | null): TypedEventFilter<[string], { verifier: string }>;

    VerifierRemoved(verifier: string | null): TypedEventFilter<[string], { verifier: string }>;
  };

  estimateGas: {
    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<BigNumber>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isUser(_user: string, _verifier: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'isUser(address,address)'(_user: string, _verifier: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerMasterAddress(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'registerMasterAddress(address,bool)'(
      _masterAddress: string,
      _isMasterLinked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterMasterAddress(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'unregisterMasterAddress(address,address)'(
      _masterAddress: string,
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

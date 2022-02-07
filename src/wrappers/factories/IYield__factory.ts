/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IYield } from '../IYield';

export class IYield__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IYield {
    return new Contract(address, _abi, signerOrProvider) as IYield;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'investedTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lpTokensReceived',
        type: 'uint256',
      },
    ],
    name: 'LockedTokens',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'savingsAccount',
        type: 'address',
      },
    ],
    name: 'SavingsAccountUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sharesReleased',
        type: 'uint256',
      },
    ],
    name: 'UnlockedShares',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'investedTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralReceived',
        type: 'uint256',
      },
    ],
    name: 'UnlockedTokens',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getSharesForTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getTokensForShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'liquidityToken',
    outputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'lockTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sharesReceived',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'unlockShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'received',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'unlockTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokensReceived',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

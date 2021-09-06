/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IExtension } from '../IExtension';

export class IExtension__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IExtension {
    return new Contract(address, _abi, signerOrProvider) as IExtension;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'closePoolExtension',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_repaymentInterval',
        type: 'uint256',
      },
    ],
    name: 'initializePoolExtension',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

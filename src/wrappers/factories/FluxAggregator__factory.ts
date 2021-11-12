/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { FluxAggregator } from "../FluxAggregator";

export class FluxAggregator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FluxAggregator> {
    return super.deploy(overrides || {}) as Promise<FluxAggregator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FluxAggregator {
    return super.attach(address) as FluxAggregator;
  }
  connect(signer: Signer): FluxAggregator__factory {
    return super.connect(signer) as FluxAggregator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FluxAggregator {
    return new Contract(address, _abi, signerOrProvider) as FluxAggregator;
  }
}

const _abi = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newVal",
        type: "int256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526003600081905560019055600480546001600160501b031916600517905534801561002e57600080fd5b506102d18061003e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806354fd4d501161005b57806354fd4d50146100d95780637284e416146100e15780639a6fc8f51461015e578063feaf968c146101d15761007d565b8063313ce567146100825780633fa4f245146100a05780635093dc7d146100ba575b600080fd5b61008a6101d9565b6040805160ff9092168252519081900360200190f35b6100a86101e2565b60408051918252519081900360200190f35b6100d7600480360360208110156100d057600080fd5b50356101e8565b005b6100a86101ed565b6100e96101f3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012357818101518382015260200161010b565b50505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101876004803603602081101561017457600080fd5b503569ffffffffffffffffffff1661027e565b604051808669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1681526020019550505050505060405180910390f35b61018761028d565b60015460ff1681565b60035481565b600355565b60005481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b505050505081565b50600354600091829081908190565b60035460009182908190819056fea264697066735822122050c2cb9df4bd0e47bf3c09e62b24a1a0090962ff67c4bccd40d75c2fbd3b1bba64736f6c63430007060033";

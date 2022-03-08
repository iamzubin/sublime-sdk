/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { YVault } from '../YVault';

export class YVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_token: string, _controller: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<YVault> {
    return super.deploy(_token, _controller, overrides || {}) as Promise<YVault>;
  }
  getDeployTransaction(
    _token: string,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _controller, overrides || {});
  }
  attach(address: string): YVault {
    return super.attach(address) as YVault;
  }
  connect(signer: Signer): YVault__factory {
    return super.connect(signer) as YVault__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): YVault {
    return new Contract(address, _abi, signerOrProvider) as YVault;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_controller',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'available',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'controller',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'earn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPricePerFullShare',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governance',
    outputs: [
      {
        internalType: 'address',
        name: '',
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
        name: 'reserve',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'harvest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'max',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'min',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_controller',
        type: 'address',
      },
    ],
    name: 'setController',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_governance',
        type: 'address',
      },
    ],
    name: 'setGovernance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_min',
        type: 'uint256',
      },
    ],
    name: 'setMin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract ERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_shares',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawAllETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_shares',
        type: 'uint256',
      },
    ],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526127066006553480156200001757600080fd5b506040516200262138038062002621833981810160405260408110156200003d57600080fd5b508051602090910151604080516306fdde0360e01b815290516001600160a01b038416916306fdde03916004808301926000929190829003018186803b1580156200008757600080fd5b505afa1580156200009c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015620000c657600080fd5b8101908080516040519392919084640100000000821115620000e757600080fd5b908301906020820185811115620000fd57600080fd5b82516401000000008111828201881017156200011857600080fd5b82525081516020918201929091019080838360005b83811015620001475781810151838201526020016200012d565b50505050905090810190601f168015620001755780820380516001836020036101000a031916815260200191505b5060405250505060405160200180806503cb2b0b937160d51b81525060060182805190602001908083835b60208310620001c15780518252601f199092019160209182019101620001a0565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200022f57600080fd5b505afa15801562000244573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200026e57600080fd5b81019080805160405193929190846401000000008211156200028f57600080fd5b908301906020820185811115620002a557600080fd5b8251640100000000811182820188101715620002c057600080fd5b82525081516020918201929091019080838360005b83811015620002ef578181015183820152602001620002d5565b50505050905090810190601f1680156200031d5780820380516001836020036101000a031916815260200191505b506040525050506040516020018080607960f81b81525060010182805190602001908083835b60208310620003645780518252601f19909201916020918201910162000343565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620003d257600080fd5b505afa158015620003e7573d6000803e3d6000fd5b505050506040513d6020811015620003fe57600080fd5b505182516200041590600390602086019062000486565b5081516200042b90600490602085019062000486565b506005805460ff191660ff9290921691909117610100600160a81b0319166101006001600160a01b0396871602179055505060078054336001600160a01b031991821617909155600880549091169190921617905562000532565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620004be576000855562000509565b82601f10620004d957805160ff191683800117855562000509565b8280016001018555821562000509579182015b8281111562000509578251825591602001919060010190620004ec565b50620005179291506200051b565b5090565b5b808211156200051757600081556001016200051c565b6120df80620005426000396000f3fe6080604052600436106101d85760003560e01c806390386bbf11610102578063d389800f11610095578063f6326fb311610064578063f6326fb314610699578063f77c4791146106a1578063f8897945146106b6578063fc0c546a146106cb576101d8565b8063d389800f1461060a578063dd62ed3e1461061f578063de5f62681461065a578063f14210a61461066f576101d8565b8063a9059cbb116100d1578063a9059cbb1461055f578063ab033ea914610598578063b69ef8a8146105cb578063b6b55f25146105e0576101d8565b806390386bbf146104c957806392eefe9b146104de57806395d89b4114610511578063a457c2d714610526576101d8565b8063395093511161017a5780636ac5db19116101495780636ac5db191461045757806370a082311461046c57806377c7b8fc1461049f578063853828b6146104b4576101d8565b806339509351146103ae57806345dc3dd8146103e757806348a0d754146104115780635aa6e67514610426576101d8565b806318160ddd116101b657806318160ddd146102ef57806323b872dd146103165780632e1a7d4d14610359578063313ce56714610383576101d8565b8063018ee9b7146101dd57806306fdde0314610218578063095ea7b3146102a2575b600080fd5b3480156101e957600080fd5b506102166004803603604081101561020057600080fd5b506001600160a01b0381351690602001356106e0565b005b34801561022457600080fd5b5061022d61079b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026757818101518382015260200161024f565b50505050905090810190601f1680156102945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102ae57600080fd5b506102db600480360360408110156102c557600080fd5b506001600160a01b038135169060200135610831565b604080519115158252519081900360200190f35b3480156102fb57600080fd5b5061030461084f565b60408051918252519081900360200190f35b34801561032257600080fd5b506102db6004803603606081101561033957600080fd5b506001600160a01b03813581169160208101359091169060400135610855565b34801561036557600080fd5b506102166004803603602081101561037c57600080fd5b50356108dc565b34801561038f57600080fd5b50610398610add565b6040805160ff9092168252519081900360200190f35b3480156103ba57600080fd5b506102db600480360360408110156103d157600080fd5b506001600160a01b038135169060200135610ae6565b3480156103f357600080fd5b506102166004803603602081101561040a57600080fd5b5035610b34565b34801561041d57600080fd5b50610304610b86565b34801561043257600080fd5b5061043b610c2d565b604080516001600160a01b039092168252519081900360200190f35b34801561046357600080fd5b50610304610c3c565b34801561047857600080fd5b506103046004803603602081101561048f57600080fd5b50356001600160a01b0316610c42565b3480156104ab57600080fd5b50610304610c5d565b3480156104c057600080fd5b50610216610c7e565b3480156104d557600080fd5b50610216610c91565b3480156104ea57600080fd5b506102166004803603602081101561050157600080fd5b50356001600160a01b0316610ca2565b34801561051d57600080fd5b5061022d610d11565b34801561053257600080fd5b506102db6004803603604081101561054957600080fd5b506001600160a01b038135169060200135610d72565b34801561056b57600080fd5b506102db6004803603604081101561058257600080fd5b506001600160a01b038135169060200135610dda565b3480156105a457600080fd5b50610216600480360360208110156105bb57600080fd5b50356001600160a01b0316610dee565b3480156105d757600080fd5b50610304610e5d565b3480156105ec57600080fd5b506102166004803603602081101561060357600080fd5b5035610f63565b34801561061657600080fd5b506102166110e8565b34801561062b57600080fd5b506103046004803603604081101561064257600080fd5b506001600160a01b0381358116916020013516611188565b34801561066657600080fd5b506102166111b3565b34801561067b57600080fd5b506102166004803603602081101561069257600080fd5b5035611235565b6102166114a3565b3480156106ad57600080fd5b5061043b61165f565b3480156106c257600080fd5b5061030461166e565b3480156106d757600080fd5b5061043b611674565b6008546001600160a01b0316331461072d576040805162461bcd60e51b815260206004820152600b60248201526a10b1b7b73a3937b63632b960a91b604482015290519081900360640190fd5b6005546001600160a01b0383811661010090920416141561077d576040805162461bcd60e51b81526020600482015260056024820152643a37b5b2b760d91b604482015290519081900360640190fd5b600854610797906001600160a01b03848116911683611688565b5050565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b820191906000526020600020905b81548152906001019060200180831161080a57829003601f168201915b5050505050905090565b600061084561083e6116da565b84846116de565b5060015b92915050565b60025490565b60006108628484846117ca565b6108d28461086e6116da565b6108cd85604051806060016040528060288152602001611fc9602891396001600160a01b038a166000908152600160205260408120906108ac6116da565b6001600160a01b03168152602081019190915260400160002054919061191a565b6116de565b5060019392505050565b60006109016108e961084f565b6108fb846108f5610e5d565b906119b1565b90611a11565b905061090d3383611a78565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561095d57600080fd5b505afa158015610971573d6000803e3d6000fd5b505050506040513d602081101561098757600080fd5b5051905081811015610abc57600061099f8383611b68565b6008546005546040805163f3fef3a360e01b81526001600160a01b036101009093048316600482015260248101859052905193945091169163f3fef3a39160448082019260009290919082900301818387803b1580156109fe57600080fd5b505af1158015610a12573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600094506101009092046001600160a01b031692506370a08231916024808301926020929190829003018186803b158015610a6757600080fd5b505afa158015610a7b573d6000803e3d6000fd5b505050506040513d6020811015610a9157600080fd5b505190506000610aa18285611b68565b905082811015610ab857610ab58482611bc5565b94505b5050505b600554610ad89061010090046001600160a01b03163384611688565b505050565b60055460ff1690565b6000610845610af36116da565b846108cd8560016000610b046116da565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611bc5565b6007546001600160a01b03163314610b81576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600655565b6000610c286127106108fb600654600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610bf657600080fd5b505afa158015610c0a573d6000803e3d6000fd5b505050506040513d6020811015610c2057600080fd5b5051906119b1565b905090565b6007546001600160a01b031681565b61271081565b6001600160a01b031660009081526020819052604090205490565b6000610c28610c6a61084f565b6108fb670de0b6b3a76400006108f5610e5d565b610c8f610c8a33610c42565b6108dc565b565b610c8f610c9d33610c42565b611235565b6007546001600160a01b03163314610cef576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600880546001600160a01b0319166001600160a01b0392909216919091179055565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b6000610845610d7f6116da565b846108cd856040518060600160405280602581526020016120856025913960016000610da96116da565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061191a565b6000610845610de76116da565b84846117ca565b6007546001600160a01b03163314610e3b576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b600854600554604080516370a0823160e01b81526001600160a01b03610100909304831660048201529051600093610c289316916370a08231916024808301926020929190829003018186803b158015610eb657600080fd5b505afa158015610eca573d6000803e3d6000fd5b505050506040513d6020811015610ee057600080fd5b5051600554604080516370a0823160e01b815230600482015290516101009092046001600160a01b0316916370a0823191602480820192602092909190829003018186803b158015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d6020811015610f5b57600080fd5b505190611bc5565b6000610f6d610e5d565b90506000600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610fd357600080fd5b505afa158015610fe7573d6000803e3d6000fd5b505050506040513d6020811015610ffd57600080fd5b505160055490915061101f9061010090046001600160a01b0316333086611c1f565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561106f57600080fd5b505afa158015611083573d6000803e3d6000fd5b505050506040513d602081101561109957600080fd5b505190506110a78183611b68565b935060006110b361084f565b6110be5750836110d7565b6110d4846108fb6110cd61084f565b88906119b1565b90505b6110e13382611c79565b5050505050565b60006110f2610b86565b6008546005549192506111179161010090046001600160a01b03908116911683611688565b6008546005546040805163b02bf4b960e01b81526101009092046001600160a01b03908116600484015260248301859052905192169163b02bf4b99160448082019260009290919082900301818387803b15801561117457600080fd5b505af11580156110e1573d6000803e3d6000fd5b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600554604080516370a0823160e01b81523360048201529051610c8f9261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561120457600080fd5b505afa158015611218573d6000803e3d6000fd5b505050506040513d602081101561122e57600080fd5b5051610f63565b60006112426108e961084f565b905061124e3383611a78565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561129e57600080fd5b505afa1580156112b2573d6000803e3d6000fd5b505050506040513d60208110156112c857600080fd5b50519050818110156113fd5760006112e08383611b68565b6008546005546040805163f3fef3a360e01b81526001600160a01b036101009093048316600482015260248101859052905193945091169163f3fef3a39160448082019260009290919082900301818387803b15801561133f57600080fd5b505af1158015611353573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600094506101009092046001600160a01b031692506370a08231916024808301926020929190829003018186803b1580156113a857600080fd5b505afa1580156113bc573d6000803e3d6000fd5b505050506040513d60208110156113d257600080fd5b5051905060006113e28285611b68565b9050828110156113f9576113f68482611bc5565b94505b5050505b600560019054906101000a90046001600160a01b03166001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561145857600080fd5b505af115801561146c573d6000803e3d6000fd5b505060405133925084156108fc02915084906000818181858888f1935050505015801561149d573d6000803e3d6000fd5b50505050565b60006114ad610e5d565b90506000600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561151357600080fd5b505afa158015611527573d6000803e3d6000fd5b505050506040513d602081101561153d57600080fd5b505160055460408051630d0e30db60e41b8152905192935034926101009092046001600160a01b03169163d0e30db0918491600480830192600092919082900301818588803b15801561158f57600080fd5b505af11580156115a3573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600095506101009092046001600160a01b031693506370a082319250602480820192602092909190829003018186803b1580156115fa57600080fd5b505afa15801561160e573d6000803e3d6000fd5b505050506040513d602081101561162457600080fd5b505190506116328184611b68565b9150600061163e61084f565b6116495750816110d7565b6110d4856108fb61165861084f565b86906119b1565b6008546001600160a01b031681565b60065481565b60055461010090046001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ad8908490611d5d565b3390565b6001600160a01b0383166117235760405162461bcd60e51b81526004018080602001828103825260248152602001806120376024913960400191505060405180910390fd5b6001600160a01b0382166117685760405162461bcd60e51b8152600401808060200182810382526022815260200180611f606022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661180f5760405162461bcd60e51b81526004018080602001828103825260258152602001806120126025913960400191505060405180910390fd5b6001600160a01b0382166118545760405162461bcd60e51b8152600401808060200182810382526023815260200180611f1b6023913960400191505060405180910390fd5b61189181604051806060016040528060268152602001611f82602691396001600160a01b038616600090815260208190526040902054919061191a565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546118c09082611bc5565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156119a95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561196e578181015183820152602001611956565b50505050905090810190601f16801561199b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000826119c057506000610849565b828202828482816119cd57fe5b0414611a0a5760405162461bcd60e51b8152600401808060200182810382526021815260200180611fa86021913960400191505060405180910390fd5b9392505050565b6000808211611a67576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611a7057fe5b049392505050565b6001600160a01b038216611abd5760405162461bcd60e51b8152600401808060200182810382526021815260200180611ff16021913960400191505060405180910390fd5b611afa81604051806060016040528060228152602001611f3e602291396001600160a01b038516600090815260208190526040902054919061191a565b6001600160a01b038316600090815260208190526040902055600254611b209082611b68565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082821115611bbf576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015611a0a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261149d908590611d5d565b6001600160a01b038216611cd4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254611ce19082611bc5565b6002556001600160a01b038216600090815260208190526040902054611d079082611bc5565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b611d6f826001600160a01b0316611f14565b611dc0576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b600080836001600160a01b0316836040518082805190602001908083835b60208310611dfd5780518252601f199092019160209182019101611dde565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611e5f576040519150601f19603f3d011682016040523d82523d6000602084013e611e64565b606091505b509150915081611ebb576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561149d57808060200190516020811015611ed757600080fd5b505161149d5760405162461bcd60e51b815260040180806020018281038252602a81526020018061205b602a913960400191505060405180910390fd5b3b15159056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206dd1e58d5137fd505feaf057956cf877ce97838775aa7e43fc5486a0c0c92cb064736f6c63430007060033';

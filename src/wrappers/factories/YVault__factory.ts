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
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x60806040526127066006553480156200001757600080fd5b506040516200264538038062002645833981810160405260408110156200003d57600080fd5b508051602090910151604080516306fdde0360e01b815290516001600160a01b038416916306fdde03916004808301926000929190829003018186803b1580156200008757600080fd5b505afa1580156200009c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015620000c657600080fd5b8101908080516040519392919084640100000000821115620000e757600080fd5b908301906020820185811115620000fd57600080fd5b82516401000000008111828201881017156200011857600080fd5b82525081516020918201929091019080838360005b83811015620001475781810151838201526020016200012d565b50505050905090810190601f168015620001755780820380516001836020036101000a031916815260200191505b5060405250505060405160200180806503cb2b0b937160d51b81525060060182805190602001908083835b60208310620001c15780518252601f199092019160209182019101620001a0565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200022f57600080fd5b505afa15801562000244573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200026e57600080fd5b81019080805160405193929190846401000000008211156200028f57600080fd5b908301906020820185811115620002a557600080fd5b8251640100000000811182820188101715620002c057600080fd5b82525081516020918201929091019080838360005b83811015620002ef578181015183820152602001620002d5565b50505050905090810190601f1680156200031d5780820380516001836020036101000a031916815260200191505b506040525050506040516020018080607960f81b81525060010182805190602001908083835b60208310620003645780518252601f19909201916020918201910162000343565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620003d257600080fd5b505afa158015620003e7573d6000803e3d6000fd5b505050506040513d6020811015620003fe57600080fd5b505182516200041590600390602086019062000486565b5081516200042b90600490602085019062000486565b506005805460ff191660ff9290921691909117610100600160a81b0319166101006001600160a01b0396871602179055505060078054336001600160a01b031991821617909155600880549091169190921617905562000532565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620004be576000855562000509565b82601f10620004d957805160ff191683800117855562000509565b8280016001018555821562000509579182015b8281111562000509578251825591602001919060010190620004ec565b50620005179291506200051b565b5090565b5b808211156200051757600081556001016200051c565b61210380620005426000396000f3fe6080604052600436106101dc5760003560e01c806390386bbf11610102578063d389800f11610095578063f6326fb311610064578063f6326fb3146106c1578063f77c4791146106c9578063f8897945146106de578063fc0c546a146106f357610202565b8063d389800f14610632578063dd62ed3e14610647578063de5f626814610682578063f14210a61461069757610202565b8063a9059cbb116100d1578063a9059cbb14610587578063ab033ea9146105c0578063b69ef8a8146105f3578063b6b55f251461060857610202565b806390386bbf146104f157806392eefe9b1461050657806395d89b4114610539578063a457c2d71461054e57610202565b8063395093511161017a5780636ac5db19116101495780636ac5db191461047f57806370a082311461049457806377c7b8fc146104c7578063853828b6146104dc57610202565b806339509351146103d657806345dc3dd81461040f57806348a0d754146104395780635aa6e6751461044e57610202565b806318160ddd116101b657806318160ddd1461031757806323b872dd1461033e5780632e1a7d4d14610381578063313ce567146103ab57610202565b8063018ee9b71461020757806306fdde0314610240578063095ea7b3146102ca57610202565b366102025760055461010090046001600160a01b0316331461020057610200610708565b005b600080fd5b34801561021357600080fd5b506102006004803603604081101561022a57600080fd5b506001600160a01b0381351690602001356108de565b34801561024c57600080fd5b50610255610999565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028f578181015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102d657600080fd5b50610303600480360360408110156102ed57600080fd5b506001600160a01b038135169060200135610a2f565b604080519115158252519081900360200190f35b34801561032357600080fd5b5061032c610a4d565b60408051918252519081900360200190f35b34801561034a57600080fd5b506103036004803603606081101561036157600080fd5b506001600160a01b03813581169160208101359091169060400135610a53565b34801561038d57600080fd5b50610200600480360360208110156103a457600080fd5b5035610ada565b3480156103b757600080fd5b506103c0610cd5565b6040805160ff9092168252519081900360200190f35b3480156103e257600080fd5b50610303600480360360408110156103f957600080fd5b506001600160a01b038135169060200135610cde565b34801561041b57600080fd5b506102006004803603602081101561043257600080fd5b5035610d2c565b34801561044557600080fd5b5061032c610d7e565b34801561045a57600080fd5b50610463610e25565b604080516001600160a01b039092168252519081900360200190f35b34801561048b57600080fd5b5061032c610e34565b3480156104a057600080fd5b5061032c600480360360208110156104b757600080fd5b50356001600160a01b0316610e3a565b3480156104d357600080fd5b5061032c610e55565b3480156104e857600080fd5b50610200610e76565b3480156104fd57600080fd5b50610200610e89565b34801561051257600080fd5b506102006004803603602081101561052957600080fd5b50356001600160a01b0316610e9a565b34801561054557600080fd5b50610255610f09565b34801561055a57600080fd5b506103036004803603604081101561057157600080fd5b506001600160a01b038135169060200135610f6a565b34801561059357600080fd5b50610303600480360360408110156105aa57600080fd5b506001600160a01b038135169060200135610fd2565b3480156105cc57600080fd5b50610200600480360360208110156105e357600080fd5b50356001600160a01b0316610fe6565b3480156105ff57600080fd5b5061032c611055565b34801561061457600080fd5b506102006004803603602081101561062b57600080fd5b503561115b565b34801561063e57600080fd5b506102006112cc565b34801561065357600080fd5b5061032c6004803603604081101561066a57600080fd5b506001600160a01b038135811691602001351661136c565b34801561068e57600080fd5b50610200611397565b3480156106a357600080fd5b50610200600480360360208110156106ba57600080fd5b5035611419565b610200610708565b3480156106d557600080fd5b50610463611687565b3480156106ea57600080fd5b5061032c611696565b3480156106ff57600080fd5b5061046361169c565b6000610712611055565b90506000600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561077857600080fd5b505afa15801561078c573d6000803e3d6000fd5b505050506040513d60208110156107a257600080fd5b505160055460408051630d0e30db60e41b8152905192935034926101009092046001600160a01b03169163d0e30db0918491600480830192600092919082900301818588803b1580156107f457600080fd5b505af1158015610808573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600095506101009092046001600160a01b031693506370a082319250602480820192602092909190829003018186803b15801561085f57600080fd5b505afa158015610873573d6000803e3d6000fd5b505050506040513d602081101561088957600080fd5b5051905061089781846116b0565b915060006108a3610a4d565b6108ae5750816108cd565b6108ca856108c46108bd610a4d565b869061170d565b9061176d565b90505b6108d733826117d4565b5050505050565b6008546001600160a01b0316331461092b576040805162461bcd60e51b815260206004820152600b60248201526a10b1b7b73a3937b63632b960a91b604482015290519081900360640190fd5b6005546001600160a01b0383811661010090920416141561097b576040805162461bcd60e51b81526020600482015260056024820152643a37b5b2b760d91b604482015290519081900360640190fd5b600854610995906001600160a01b038481169116836118b8565b5050565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610a255780601f106109fa57610100808354040283529160200191610a25565b820191906000526020600020905b815481529060010190602001808311610a0857829003601f168201915b5050505050905090565b6000610a43610a3c61190a565b848461190e565b5060015b92915050565b60025490565b6000610a608484846119fa565b610ad084610a6c61190a565b610acb85604051806060016040528060288152602001611fed602891396001600160a01b038a16600090815260016020526040812090610aaa61190a565b6001600160a01b031681526020810191909152604001600020549190611b4a565b61190e565b5060019392505050565b6000610af9610ae7610a4d565b6108c484610af3611055565b9061170d565b9050610b053383611be1565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610b5557600080fd5b505afa158015610b69573d6000803e3d6000fd5b505050506040513d6020811015610b7f57600080fd5b5051905081811015610cb4576000610b9783836116b0565b6008546005546040805163f3fef3a360e01b81526001600160a01b036101009093048316600482015260248101859052905193945091169163f3fef3a39160448082019260009290919082900301818387803b158015610bf657600080fd5b505af1158015610c0a573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600094506101009092046001600160a01b031692506370a08231916024808301926020929190829003018186803b158015610c5f57600080fd5b505afa158015610c73573d6000803e3d6000fd5b505050506040513d6020811015610c8957600080fd5b505190506000610c9982856116b0565b905082811015610cb057610cad8482611cd1565b94505b5050505b600554610cd09061010090046001600160a01b031633846118b8565b505050565b60055460ff1690565b6000610a43610ceb61190a565b84610acb8560016000610cfc61190a565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611cd1565b6007546001600160a01b03163314610d79576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600655565b6000610e206127106108c4600654600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dee57600080fd5b505afa158015610e02573d6000803e3d6000fd5b505050506040513d6020811015610e1857600080fd5b50519061170d565b905090565b6007546001600160a01b031681565b61271081565b6001600160a01b031660009081526020819052604090205490565b6000610e20610e62610a4d565b6108c4670de0b6b3a7640000610af3611055565b610e87610e8233610e3a565b610ada565b565b610e87610e9533610e3a565b611419565b6007546001600160a01b03163314610ee7576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600880546001600160a01b0319166001600160a01b0392909216919091179055565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610a255780601f106109fa57610100808354040283529160200191610a25565b6000610a43610f7761190a565b84610acb856040518060600160405280602581526020016120a96025913960016000610fa161190a565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611b4a565b6000610a43610fdf61190a565b84846119fa565b6007546001600160a01b03163314611033576040805162461bcd60e51b815260206004820152600b60248201526a21676f7665726e616e636560a81b604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b600854600554604080516370a0823160e01b81526001600160a01b03610100909304831660048201529051600093610e209316916370a08231916024808301926020929190829003018186803b1580156110ae57600080fd5b505afa1580156110c2573d6000803e3d6000fd5b505050506040513d60208110156110d857600080fd5b5051600554604080516370a0823160e01b815230600482015290516101009092046001600160a01b0316916370a0823191602480820192602092909190829003018186803b15801561112957600080fd5b505afa15801561113d573d6000803e3d6000fd5b505050506040513d602081101561115357600080fd5b505190611cd1565b6000611165611055565b90506000600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111cb57600080fd5b505afa1580156111df573d6000803e3d6000fd5b505050506040513d60208110156111f557600080fd5b50516005549091506112179061010090046001600160a01b0316333086611d2b565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561126757600080fd5b505afa15801561127b573d6000803e3d6000fd5b505050506040513d602081101561129157600080fd5b5051905061129f81836116b0565b935060006112ab610a4d565b6112b65750836108cd565b6108ca846108c46112c5610a4d565b889061170d565b60006112d6610d7e565b6008546005549192506112fb9161010090046001600160a01b039081169116836118b8565b6008546005546040805163b02bf4b960e01b81526101009092046001600160a01b03908116600484015260248301859052905192169163b02bf4b99160448082019260009290919082900301818387803b15801561135857600080fd5b505af11580156108d7573d6000803e3d6000fd5b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600554604080516370a0823160e01b81523360048201529051610e879261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156113e857600080fd5b505afa1580156113fc573d6000803e3d6000fd5b505050506040513d602081101561141257600080fd5b505161115b565b6000611426610ae7610a4d565b90506114323383611be1565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561148257600080fd5b505afa158015611496573d6000803e3d6000fd5b505050506040513d60208110156114ac57600080fd5b50519050818110156115e15760006114c483836116b0565b6008546005546040805163f3fef3a360e01b81526001600160a01b036101009093048316600482015260248101859052905193945091169163f3fef3a39160448082019260009290919082900301818387803b15801561152357600080fd5b505af1158015611537573d6000803e3d6000fd5b5050600554604080516370a0823160e01b81523060048201529051600094506101009092046001600160a01b031692506370a08231916024808301926020929190829003018186803b15801561158c57600080fd5b505afa1580156115a0573d6000803e3d6000fd5b505050506040513d60208110156115b657600080fd5b5051905060006115c682856116b0565b9050828110156115dd576115da8482611cd1565b94505b5050505b600560019054906101000a90046001600160a01b03166001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561163c57600080fd5b505af1158015611650573d6000803e3d6000fd5b505060405133925084156108fc02915084906000818181858888f19350505050158015611681573d6000803e3d6000fd5b50505050565b6008546001600160a01b031681565b60065481565b60055461010090046001600160a01b031681565b600082821115611707576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008261171c57506000610a47565b8282028284828161172957fe5b04146117665760405162461bcd60e51b8152600401808060200182810382526021815260200180611fcc6021913960400191505060405180910390fd5b9392505050565b60008082116117c3576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816117cc57fe5b049392505050565b6001600160a01b03821661182f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60025461183c9082611cd1565b6002556001600160a01b0382166000908152602081905260409020546118629082611cd1565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610cd0908490611d81565b3390565b6001600160a01b0383166119535760405162461bcd60e51b815260040180806020018281038252602481526020018061205b6024913960400191505060405180910390fd5b6001600160a01b0382166119985760405162461bcd60e51b8152600401808060200182810382526022815260200180611f846022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316611a3f5760405162461bcd60e51b81526004018080602001828103825260258152602001806120366025913960400191505060405180910390fd5b6001600160a01b038216611a845760405162461bcd60e51b8152600401808060200182810382526023815260200180611f3f6023913960400191505060405180910390fd5b611ac181604051806060016040528060268152602001611fa6602691396001600160a01b0386166000908152602081905260409020549190611b4a565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611af09082611cd1565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611bd95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b9e578181015183820152602001611b86565b50505050905090810190601f168015611bcb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216611c265760405162461bcd60e51b81526004018080602001828103825260218152602001806120156021913960400191505060405180910390fd5b611c6381604051806060016040528060228152602001611f62602291396001600160a01b0385166000908152602081905260409020549190611b4a565b6001600160a01b038316600090815260208190526040902055600254611c8990826116b0565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082820183811015611766576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526116819085905b611d93826001600160a01b0316611f38565b611de4576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b600080836001600160a01b0316836040518082805190602001908083835b60208310611e215780518252601f199092019160209182019101611e02565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611e83576040519150601f19603f3d011682016040523d82523d6000602084013e611e88565b606091505b509150915081611edf576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561168157808060200190516020811015611efb57600080fd5b50516116815760405162461bcd60e51b815260040180806020018281038252602a81526020018061207f602a913960400191505060405180910390fd5b3b15159056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212208dbe44efe7ff0a51e8f94ce22d1001f958bf8b617bdd5472f6f8f647b3cdc3e164736f6c63430007060033';

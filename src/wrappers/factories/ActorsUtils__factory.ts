/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { ActorsUtils } from '../ActorsUtils';

export class ActorsUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ActorsUtils> {
    return super.deploy(overrides || {}) as Promise<ActorsUtils>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ActorsUtils {
    return super.attach(address) as ActorsUtils;
  }
  connect(signer: Signer): ActorsUtils__factory {
    return super.connect(signer) as ActorsUtils__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ActorsUtils {
    return new Contract(address, _abi, signerOrProvider) as ActorsUtils;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'SetUpCreditLineActors',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SetUpGlobalActors',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SetUpPoolActors',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createBob',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createCreditLineBorrower',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createCreditLineLender',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createCreditLineLiquidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createFakeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createFakeVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createPoolBorrower',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createPoolLenders',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createPoolLiquidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50611d08806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a14ffd5e1161008c578063c8c0629211610066578063c8c0629214610141578063d4aae21414610149578063e1c9a83414610151578063e92980c514610159576100ea565b8063a14ffd5e14610129578063b54a73fe14610131578063be289dde14610139576100ea565b80635bf23593116100c85780635bf235931461010957806380da401f1461011157806389000b3c1461011957806390ece95e14610121576100ea565b8063201bd240146100ef578063453827c6146100f957806354c8194f14610101575b600080fd5b6100f7610161565b005b6100f761017b565b6100f76101c6565b6100f7610211565b6100f7610239565b6100f7610284565b6100f76102cf565b6100f76103ac565b6100f76103f7565b6100f7610442565b6100f761048d565b6100f76104a5565b6100f76104f0565b6100f761053b565b6101696104a5565b6101716102cf565b610179610239565b565b60405161018790610586565b604051809103906000f0801580156101a3573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b0392909216919091179055565b6040516101d290610586565b604051809103906000f0801580156101ee573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055565b61021961053b565b6102216104f0565b61022961017b565b6102316101c6565b610179610284565b60405161024590610592565b604051809103906000f080158015610261573d6000803e3d6000fd5b50600980546001600160a01b0319166001600160a01b0392909216919091179055565b6040516102909061059f565b604051809103906000f0801580156102ac573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b0392909216919091179055565b6040516102db90610592565b604051809103906000f0801580156102f7573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b039290921691909117905560405161032490610592565b604051809103906000f080158015610340573d6000803e3d6000fd5b50600780546001600160a01b0319166001600160a01b039290921691909117905560405161036d90610592565b604051809103906000f080158015610389573d6000803e3d6000fd5b50600880546001600160a01b0319166001600160a01b0392909216919091179055565b6040516103b8906105ab565b604051809103906000f0801580156103d4573d6000803e3d6000fd5b50600b80546001600160a01b0319166001600160a01b0392909216919091179055565b604051610403906105ab565b604051809103906000f08015801561041f573d6000803e3d6000fd5b50600a80546001600160a01b0319166001600160a01b0392909216919091179055565b60405161044e906105ab565b604051809103906000f08015801561046a573d6000803e3d6000fd5b50600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6104956103f7565b61049d6103ac565b610179610442565b6040516104b190610592565b604051809103906000f0801580156104cd573d6000803e3d6000fd5b50600580546001600160a01b0319166001600160a01b0392909216919091179055565b6040516104fc906105b8565b604051809103906000f080158015610518573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b0392909216919091179055565b604051610547906105b8565b604051809103906000f080158015610563573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b0392909216919091179055565b605c806105c683390190565b6101218061062283390190565b605c8061074383390190565b6106798061079f83390190565b610ebb80610e188339019056fe6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212203ffd2a8cb7e8974e8ef05dd00a13e151778082b4300c95b14987a6724f52684e64736f6c63430007060033608060405234801561001057600080fd5b50610101806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e5feb78114602d575b600080fd5b605e60048036036060811015604157600080fd5b506001600160a01b03813516906020810135906040013515156060565b005b826001600160a01b031663d2b93bfd83836040518363ffffffff1660e01b815260040180838152602001821515815260200192505050600060405180830381600087803b15801560af57600080fd5b505af115801560c2573d6000803e3d6000fd5b5050505050505056fea26469706673582212209d82490c1b97044cf32a7ed95ce6cf8c53c5cdff17ef65d97dfdaf4d4820a41b64736f6c634300070600336080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212200d8e567496acb8ef0547beeb4938c7f1971e5b323082b04762a810e63cc7acfe64736f6c63430007060033608060405234801561001057600080fd5b50610659806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063acd703f21161005b578063acd703f2146100db578063c1bce0b7146100ee578063e49280cb14610101578063fd705cca1461011457610088565b80633ecdb8281461008d5780638616abd8146100a257806386e439e9146100b55780638cd2e0c7146100c8575b600080fd5b6100a061009b3660046104b6565b610127565b005b6100a06100b036600461048d565b61018f565b6100a06100c3366004610523565b6101f4565b6100a06100d63660046104f1565b61025f565b6100a06100e93660046103e9565b61028f565b6100a06100fc3660046104f1565b61032d565b6100a061010f36600461048d565b61035d565b6100a0610122366004610523565b61038b565b6040516309d636c360e21b815283906001600160a01b03821690632758db0c9061015790869086906004016105ed565b600060405180830381600087803b15801561017157600080fd5b505af1158015610185573d6000803e3d6000fd5b5050505050505050565b6040516319b05f4960e01b815282906001600160a01b038216906319b05f49906101bd9085906004016105e4565b600060405180830381600087803b1580156101d757600080fd5b505af11580156101eb573d6000803e3d6000fd5b50505050505050565b604051631156d69f60e11b815284906001600160a01b038216906322adad3e906102269087908790879060040161060b565b600060405180830381600087803b15801561024057600080fd5b505af1158015610254573d6000803e3d6000fd5b505050505050505050565b60405163d8aed14560e01b815283906001600160a01b0382169063d8aed1459061015790869086906004016105fd565b60405163277c338360e11b81528a906001600160a01b03821690634ef86706906102cd908d908d908d908d908d908d908d908d908d90600401610580565b602060405180830381600087803b1580156102e757600080fd5b505af11580156102fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031f9190610568565b505050505050505050505050565b604051630ecbcdab60e01b815283906001600160a01b03821690630ecbcdab9061015790869086906004016105fd565b604051630575f5a760e11b815282906001600160a01b03821690630aebeb4e906101bd9085906004016105e4565b60405163451226d160e01b815284906001600160a01b0382169063451226d1906102269087908790879060040161060b565b80356001600160a01b03811681146103d457600080fd5b919050565b803580151581146103d457600080fd5b6000806000806000806000806000806101408b8d031215610408578586fd5b6104118b6103bd565b995061041f60208c016103bd565b985060408b0135975060608b0135965061043b60808c016103d9565b955060a08b0135945061045060c08c016103bd565b935061045e60e08c016103bd565b925061046d6101008c016103bd565b915061047c6101208c016103d9565b90509295989b9194979a5092959850565b6000806040838503121561049f578182fd5b6104a8836103bd565b946020939093013593505050565b6000806000606084860312156104ca578283fd5b6104d3846103bd565b9250602084013591506104e8604085016103d9565b90509250925092565b600080600060608486031215610505578283fd5b61050e846103bd565b95602085013595506040909401359392505050565b60008060008060808587031215610538578384fd5b610541856103bd565b9350602085013592506040850135915061055d606086016103d9565b905092959194509250565b600060208284031215610579578081fd5b5051919050565b6001600160a01b03998a1681526fffffffffffffffffffffffffffffffff988916602082015296909716604087015293151560608601526080850192909252851660a0840152841660c083015290921660e083015215156101008201526101200190565b90815260200190565b9182521515602082015260400190565b918252602082015260400190565b9283526020830191909152151560408201526060019056fea26469706673582212209e61324659250871a8fc5a98ec6df0c2e1cbf4c61ba4429d7b8efa6e6fa1e56a64736f6c63430007060033608060405234801561001057600080fd5b50610e9b806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c84f2c9211610066578063c84f2c9214610189578063d10b6bcc1461015b578063dbab15ca146101af578063dc964a79146101e7578063e4f106fb146102155761009e565b80631388ae2e146100a357806318066943146100cb5780632089dc08146100f95780636caed82e146101355780637bfb73f71461015b575b600080fd5b6100c9600480360360208110156100b957600080fd5b50356001600160a01b031661023b565b005b6100c9600480360360408110156100e157600080fd5b506001600160a01b0381358116916020013516610437565b6100c96004803603608081101561010f57600080fd5b506001600160a01b03813581169160208101359160408201358116916060013516610486565b6100c96004803603602081101561014b57600080fd5b50356001600160a01b031661050c565b6100c96004803603604081101561017157600080fd5b506001600160a01b038135811691602001351661097f565b6100c96004803603602081101561019f57600080fd5b50356001600160a01b03166109ce565b6100c9600480360360608110156101c557600080fd5b506001600160a01b038135811691602081013582169160409091013516610bed565b6100c9600480360360408110156101fd57600080fd5b506001600160a01b0381358116916020013516610c6a565b6100c96004803603602081101561022b57600080fd5b50356001600160a01b0316610cb9565b60408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f56406044820152905182916001600160a01b03831691630626a92b9160648082019260009290919082900301818387803b1580156102cd57600080fd5b505af11580156102e1573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2602482015273cbcdf9626bc03e24f779434178a73a0b4bad62ed604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561037457600080fd5b505af1158015610388573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c5996004820152736b175474e89094c44da98b954eedeac495271d0f602482015273391e8501b626c623d39474afca6f9e46c2686649604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050505050565b816001600160a01b031663223e5479826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b836001600160a01b03166376ba717b8484846040518463ffffffff1660e01b815260040180848152602001836001600160a01b03168152602001826001600160a01b031681526020019350505050600060405180830381600087803b1580156104ee57600080fd5b505af1158015610502573d6000803e3d6000fd5b5050505050505050565b60408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b84196024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b15801561058457600080fd5b505af1158015610598573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152736b175474e89094c44da98b954eedeac495271d0f600482015273aed0c38402a5d19df6e4c03f4e2dced6e29c1ee9602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f6602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561069e57600080fd5b505af11580156106b2573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273f4030086522a5beea4988f8ca5b36dbc97bee88c602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561072b57600080fd5b505af115801561073f573d6000803e3d6000fd5b505060408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f5640604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b1580156107d257600080fd5b505af11580156107e6573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2602482015273cbcdf9626bc03e24f779434178a73a0b4bad62ed604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561087957600080fd5b505af115801561088d573d6000803e3d6000fd5b505060408051630626a92b60e01b8152732260fac5e5542a773aa44fbcfedf7c193bc2c5996004820152736b175474e89094c44da98b954eedeac495271d0f602482015273391e8501b626c623d39474afca6f9e46c2686649604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561092057600080fd5b505af1158015610934573d6000803e3d6000fd5b50505050806001600160a01b031663252a62c1600a6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561041b57600080fd5b816001600160a01b0316636cf14f9d826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b60408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b84196024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b158015610a4657600080fd5b505af1158015610a5a573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152736b175474e89094c44da98b954eedeac495271d0f600482015273aed0c38402a5d19df6e4c03f4e2dced6e29c1ee9602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610ad357600080fd5b505af1158015610ae7573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f6602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610b6057600080fd5b505af1158015610b74573d6000803e3d6000fd5b505060408051630fa6fc4360e41b8152732260fac5e5542a773aa44fbcfedf7c193bc2c599600482015273f4030086522a5beea4988f8ca5b36dbc97bee88c602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b15801561041b57600080fd5b826001600160a01b031663fa6fc43083836040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b158015610c4d57600080fd5b505af1158015610c61573d6000803e3d6000fd5b50505050505050565b816001600160a01b03166356f421d0826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b15801561041b57600080fd5b60408051630fa6fc4360e41b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486004820152738fffffd4afb6115b954bd326cbe7b4ba576818f66024820152905182916001600160a01b0383169163fa6fc4309160448082019260009290919082900301818387803b158015610d3157600080fd5b505af1158015610d45573d6000803e3d6000fd5b505060408051630fa6fc4360e41b815273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26004820152735f4ec3df9cbd43714fe2740f5e3616155c5b8419602482015290516001600160a01b038516935063fa6fc4309250604480830192600092919082900301818387803b158015610dbe57600080fd5b505af1158015610dd2573d6000803e3d6000fd5b505060408051630626a92b60e01b815273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201527388e6a0c2ddd26feeb64f039a2c41296fcb3f5640604482015290516001600160a01b0385169350630626a92b9250606480830192600092919082900301818387803b15801561041b57600080fdfea264697066735822122007c088e04ed1180569b9361a1bf10db06ad01d87eda99ca92a3487fc18a1021c64736f6c63430007060033a264697066735822122054fa18c5f5107e8c4a5401c5588c0945ce0b04df789f9457e22b060f4c1452bb64736f6c63430007060033';

[sublime-sdk](../README.md) / [Modules](../modules.md) / [sublime](../modules/sublime.md) / SublimeConnector

# Class: SublimeConnector

[sublime](../modules/sublime.md).SublimeConnector

## Table of contents

### Constructors

- [constructor](sublime.SublimeConnector.md#constructor)

### Properties

- [config](sublime.SublimeConnector.md#config)
- [provider](sublime.SublimeConnector.md#provider)
- [signer](sublime.SublimeConnector.md#signer)
- [tokenManager](sublime.SublimeConnector.md#tokenmanager)

### Methods

- [Address](sublime.SublimeConnector.md#address)
- [CreditLinesApi](sublime.SublimeConnector.md#creditlinesapi)
- [PoolApi](sublime.SublimeConnector.md#poolapi)
- [PriceOracleApi](sublime.SublimeConnector.md#priceoracleapi)
- [RepaymentApi](sublime.SublimeConnector.md#repaymentapi)
- [SavingsAccountApi](sublime.SublimeConnector.md#savingsaccountapi)
- [TokenApi](sublime.SublimeConnector.md#tokenapi)
- [VerificationApi](sublime.SublimeConnector.md#verificationapi)
- [YieldAndStrategyApi](sublime.SublimeConnector.md#yieldandstrategyapi)
- [getBalance](sublime.SublimeConnector.md#getbalance)
- [getChainId](sublime.SublimeConnector.md#getchainid)
- [waitForTransaction](sublime.SublimeConnector.md#waitfortransaction)

## Constructors

### constructor

• **new SublimeConnector**(`provider`, `signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/sublime.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L26)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/sublime.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L23)

___

### provider

• `Private` **provider**: `Provider`

#### Defined in

[src/sublime.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L21)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/sublime.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L22)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/sublime.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L24)

## Methods

### Address

▸ **Address**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The current address of the signer

#### Defined in

[src/sublime.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L49)

___

### CreditLinesApi

▸ **CreditLinesApi**(): [`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Returns

[`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Defined in

[src/sublime.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L37)

___

### PoolApi

▸ **PoolApi**(): [`PoolApi`](api_pool.PoolApi.md)

#### Returns

[`PoolApi`](api_pool.PoolApi.md)

#### Defined in

[src/sublime.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L33)

___

### PriceOracleApi

▸ **PriceOracleApi**(): [`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Returns

[`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Defined in

[src/sublime.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L69)

___

### RepaymentApi

▸ **RepaymentApi**(): [`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Returns

[`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Defined in

[src/sublime.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L53)

___

### SavingsAccountApi

▸ **SavingsAccountApi**(): [`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Returns

[`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Defined in

[src/sublime.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L41)

___

### TokenApi

▸ **TokenApi**(`tokenAddress`): [`TokenApi`](api_tokenApi.TokenApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

[`TokenApi`](api_tokenApi.TokenApi.md)

#### Defined in

[src/sublime.ts:65](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L65)

___

### VerificationApi

▸ **VerificationApi**(): [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Returns

[`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

[src/sublime.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L57)

___

### YieldAndStrategyApi

▸ **YieldAndStrategyApi**(): [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Returns

[`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/sublime.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L61)

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

balance in ethers (decimals included)

#### Defined in

[src/sublime.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L82)

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/sublime.ts:73](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L73)

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt after waiting for the specified number oif blocks

#### Defined in

[src/sublime.ts:94](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/sublime.ts#L94)

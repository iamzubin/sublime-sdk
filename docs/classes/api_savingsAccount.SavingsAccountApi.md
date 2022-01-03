[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/savingsAccount](../modules/api_savingsAccount.md) / SavingsAccountApi

# Class: SavingsAccountApi

[api/savingsAccount](../modules/api_savingsAccount.md).SavingsAccountApi

## Table of contents

### Constructors

- [constructor](api_savingsAccount.SavingsAccountApi.md#constructor)

### Properties

- [config](api_savingsAccount.SavingsAccountApi.md#config)
- [savingsAccount](api_savingsAccount.SavingsAccountApi.md#savingsaccount)
- [signer](api_savingsAccount.SavingsAccountApi.md#signer)
- [tokenManager](api_savingsAccount.SavingsAccountApi.md#tokenmanager)

### Methods

- [approve](api_savingsAccount.SavingsAccountApi.md#approve)
- [approveTokenForCreditLines](api_savingsAccount.SavingsAccountApi.md#approvetokenforcreditlines)
- [approveTokenForSavingsAccountDeposit](api_savingsAccount.SavingsAccountApi.md#approvetokenforsavingsaccountdeposit)
- [decreaseAllowance](api_savingsAccount.SavingsAccountApi.md#decreaseallowance)
- [deposit](api_savingsAccount.SavingsAccountApi.md#deposit)
- [getLiquidityTokenOfAssetForStrategy](api_savingsAccount.SavingsAccountApi.md#getliquiditytokenofassetforstrategy)
- [getShares](api_savingsAccount.SavingsAccountApi.md#getshares)
- [getStrategyAddress](api_savingsAccount.SavingsAccountApi.md#getstrategyaddress)
- [getTotalTokens](api_savingsAccount.SavingsAccountApi.md#gettotaltokens)
- [increaseAllowance](api_savingsAccount.SavingsAccountApi.md#increaseallowance)
- [switchStrategy](api_savingsAccount.SavingsAccountApi.md#switchstrategy)
- [transfer](api_savingsAccount.SavingsAccountApi.md#transfer)
- [transferFrom](api_savingsAccount.SavingsAccountApi.md#transferfrom)
- [withdraw](api_savingsAccount.SavingsAccountApi.md#withdraw)
- [withdrawAll](api_savingsAccount.SavingsAccountApi.md#withdrawall)
- [withdrawFrom](api_savingsAccount.SavingsAccountApi.md#withdrawfrom)

## Constructors

### constructor

• **new SavingsAccountApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | `any` |

#### Defined in

[api/savingsAccount.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L26)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/savingsAccount.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L23)

___

### savingsAccount

• `Private` **savingsAccount**: `SavingsAccount`

#### Defined in

[api/savingsAccount.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L22)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/savingsAccount.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L21)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/savingsAccount.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L24)

## Methods

### approve

▸ **approve**(`amount`, `token`, `to`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in the savings to be used to other address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` |  |
| `token` | `string` |  |
| `to` | `string` | : Address to which you want to approve |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L210)

___

### approveTokenForCreditLines

▸ **approveTokenForCreditLines**(`token`, `amount`): `Promise`<`ContractTransaction`\>

**`@deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/savingsAccount.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L266)

___

### approveTokenForSavingsAccountDeposit

▸ **approveTokenForSavingsAccountDeposit**(`amount`, `asset`, `strategy`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in your wallet for depositing to a strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L40)

___

### decreaseAllowance

▸ **decreaseAllowance**(`token`, `to`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L248)

___

### deposit

▸ **deposit**(`amount`, `asset`, `strategy`, `to`): `Promise`<`ContractTransaction`\>

**`description:`** Deposit amount to strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L63)

___

### getLiquidityTokenOfAssetForStrategy

▸ **getLiquidityTokenOfAssetForStrategy**(`asset`, `strategy`): `Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

**`description`** Get the liquidity token for a given tokenb

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

Asset in detail

#### Defined in

[api/savingsAccount.ts:377](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L377)

___

### getShares

▸ **getShares**(`user`, `asset`, `strategy`): `Promise`<`string`\>

**`description`** Fet the specific liquidity shares in the savings account for a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<`string`\>

easy read number in string

#### Defined in

[api/savingsAccount.ts:359](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L359)

___

### getStrategyAddress

▸ `Private` **getStrategyAddress**(`strategy`): `string`

**`description`** Returns the contract address of a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

#### Defined in

[api/savingsAccount.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L395)

___

### getTotalTokens

▸ **getTotalTokens**(`user`, `asset`): `Promise`<`string`\>

**`description`** Get specific token asset locked in savings account. For ex; if asset=dai_address,
then call returns the amount of DAI stored in the savings account for that user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |

#### Returns

`Promise`<`string`\>

easy read number in string

#### Defined in

[api/savingsAccount.ts:344](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L344)

___

### increaseAllowance

▸ **increaseAllowance**(`token`, `to`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L229)

___

### switchStrategy

▸ **switchStrategy**(`currentStrategy`, `newStrategy`, `asset`, `amount`): `Promise`<`ContractTransaction`\>

**`description`** Switch amount from one strategy to another

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `newStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `asset` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L91)

___

### transfer

▸ **transfer**(`amount`, `token`, `strategy`, `to`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from one address to another, but within the same strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:290](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L290)

___

### transferFrom

▸ **transferFrom**(`amount`, `token`, `strategy`, `from`, `to`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from "from" address to another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:317](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L317)

___

### withdraw

▸ **withdraw**(`amount`, `token`, `strategy`, `to`, `withdrawShares`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `withdrawShares` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L129)

___

### withdrawAll

▸ **withdrawAll**(`asset`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw a particular tokens from all strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | / token address |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L199)

___

### withdrawFrom

▸ **withdrawFrom**(`amount`, `token`, `strategy`, `from`, `to`, `withdrawShares`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from another address i.e "from" address here

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `withdrawShares` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/savingsAccount.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/savingsAccount.ts#L165)

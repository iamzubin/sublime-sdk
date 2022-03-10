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

- [SavingAccountsEthUtils](api_savingsAccount.SavingsAccountApi.md#savingaccountsethutils)
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
- [withdrawAllFromAStrategy](api_savingsAccount.SavingsAccountApi.md#withdrawallfromastrategy)
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

[src/api/savingsAccount.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L26)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/savingsAccount.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L23)

___

### savingsAccount

• `Private` **savingsAccount**: `SavingsAccount`

#### Defined in

[src/api/savingsAccount.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L22)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/savingsAccount.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L21)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/savingsAccount.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L24)

## Methods

### SavingAccountsEthUtils

▸ **SavingAccountsEthUtils**(): [`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

**`description`** The returned objet helps in making direct ETH deposits to the savings Account

#### Returns

[`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

#### Defined in

[src/api/savingsAccount.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L37)

___

### approve

▸ **approve**(`amount`, `token`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in the savings to be used to other address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` |  |
| `token` | `string` |  |
| `to` | `string` | : Address to which you want to approve |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L248)

___

### approveTokenForCreditLines

▸ **approveTokenForCreditLines**(`token`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`@deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:308](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L308)

___

### approveTokenForSavingsAccountDeposit

▸ **approveTokenForSavingsAccountDeposit**(`amount`, `asset`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in your wallet for depositing to a strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L48)

___

### decreaseAllowance

▸ **decreaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:288](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L288)

___

### deposit

▸ **deposit**(`amount`, `asset`, `strategy`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description:`** Deposit amount to strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:78](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L78)

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

[src/api/savingsAccount.ts:435](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L435)

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

[src/api/savingsAccount.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L417)

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

[src/api/savingsAccount.ts:453](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L453)

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

[src/api/savingsAccount.ts:402](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L402)

___

### increaseAllowance

▸ **increaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L267)

___

### switchStrategy

▸ **switchStrategy**(`currentStrategy`, `newStrategy`, `asset`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Switch amount from one strategy to another

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `newStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `asset` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L112)

___

### transfer

▸ **transfer**(`token`, `strategy`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from one address to another, but within the same strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:333](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L333)

___

### transferFrom

▸ **transferFrom**(`token`, `strategy`, `from`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from "from" address to another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:367](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L367)

___

### withdraw

▸ **withdraw**(`token`, `strategy`, `to`, `amount`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `amount` | `string` |
| `withdrawShares` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L152)

___

### withdrawAll

▸ **withdrawAll**(`asset`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw a particular tokens from all strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | / token address |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:225](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L225)

___

### withdrawAllFromAStrategy

▸ **withdrawAllFromAStrategy**(`asset`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** withdraw all tokens from a strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | asset to withdraw |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | strategy from which the tokens should be withdrawn |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:236](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L236)

___

### withdrawFrom

▸ **withdrawFrom**(`amount`, `token`, `strategy`, `from`, `to`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

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
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:190](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/savingsAccount.ts#L190)

[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/tokenApi](../modules/api_tokenApi.md) / TokenApi

# Class: TokenApi

[api/tokenApi](../modules/api_tokenApi.md).TokenApi

## Table of contents

### Constructors

- [constructor](api_tokenApi.TokenApi.md#constructor)

### Properties

- [signer](api_tokenApi.TokenApi.md#signer)
- [tokenContract](api_tokenApi.TokenApi.md#tokencontract)
- [tokenManager](api_tokenApi.TokenApi.md#tokenmanager)

### Methods

- [IncreaseAllowance](api_tokenApi.TokenApi.md#increaseallowance)
- [\_getBalance](api_tokenApi.TokenApi.md#_getbalance)
- [allowance](api_tokenApi.TokenApi.md#allowance)
- [approve](api_tokenApi.TokenApi.md#approve)
- [getTokenBalance](api_tokenApi.TokenApi.md#gettokenbalance)
- [getUserTokenBalance](api_tokenApi.TokenApi.md#getusertokenbalance)

## Constructors

### constructor

• **new TokenApi**(`signer`, `tokenAddress`, `tokenManager`)

**`description`** if tokenAddress is any invalid token address, the APIs of the class object will fail

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[api/tokenApi.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L21)

## Properties

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/tokenApi.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L11)

___

### tokenContract

• `Private` **tokenContract**: `Token`

#### Defined in

[api/tokenApi.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L12)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/tokenApi.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L13)

## Methods

### IncreaseAllowance

▸ **IncreaseAllowance**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/tokenApi.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L33)

___

### \_getBalance

▸ `Private` **_getBalance**(`user`, `prettified`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `prettified` | `any` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/tokenApi.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L103)

___

### allowance

▸ **allowance**(`owner`, `spender`, `prettified?`): `Promise`<`string`\>

**`description`** Returns the allowance of spender by owner

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `owner` | `string` | `undefined` |
| `spender` | `string` | `undefined` |
| `prettified` | `boolean` | `false` |

#### Returns

`Promise`<`string`\>

number

#### Defined in

[api/tokenApi.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L72)

___

### approve

▸ **approve**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[api/tokenApi.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L52)

___

### getTokenBalance

▸ **getTokenBalance**(`prettified?`): `Promise`<`string`\>

**`description`** return the current signers token balance.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/tokenApi.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L89)

___

### getUserTokenBalance

▸ **getUserTokenBalance**(`user`, `prettified?`): `Promise`<`string`\>

**`description`** return any user token balance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `string` | `undefined` |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/tokenApi.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/7040d02/src/api/tokenApi.ts#L99)

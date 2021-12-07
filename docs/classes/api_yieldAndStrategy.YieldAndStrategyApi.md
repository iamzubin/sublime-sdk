[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/yieldAndStrategy](../modules/api_yieldAndStrategy.md) / YieldAndStrategyApi

# Class: YieldAndStrategyApi

[api/yieldAndStrategy](../modules/api_yieldAndStrategy.md).YieldAndStrategyApi

## Table of contents

### Constructors

- [constructor](api_yieldAndStrategy.YieldAndStrategyApi.md#constructor)

### Properties

- [config](api_yieldAndStrategy.YieldAndStrategyApi.md#config)
- [signer](api_yieldAndStrategy.YieldAndStrategyApi.md#signer)
- [tokenManager](api_yieldAndStrategy.YieldAndStrategyApi.md#tokenmanager)

### Methods

- [getSharesForTokens](api_yieldAndStrategy.YieldAndStrategyApi.md#getsharesfortokens)
- [getStrategies](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategies)
- [getTokensForShares](api_yieldAndStrategy.YieldAndStrategyApi.md#gettokensforshares)

## Constructors

### constructor

• **new YieldAndStrategyApi**(`signer`, `config`, `tokenManger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManger` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[api/yieldAndStrategy.ts:24](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L24)

## Properties

### config

• **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/yieldAndStrategy.ts:21](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L21)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/yieldAndStrategy.ts:20](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L20)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/yieldAndStrategy.ts:22](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L22)

## Methods

### getSharesForTokens

▸ **getSharesForTokens**(`yieldAddress`, `asset`, `amount`): `Promise`<`string`\>

**`description`** returns the number shares that will be generated for given number of tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/yieldAndStrategy.ts:75](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L75)

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

[api/yieldAndStrategy.ts:100](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L100)

___

### getTokensForShares

▸ **getTokensForShares**(`yieldAddress`, `asset`, `shares`, `sharesInLowestUnits?`): `Promise`<`BigNumber`\>

**`description`** Returns the number of tokens that will be redeemed for given number of shares

#### Parameters

| Name | Type |
| :------ | :------ |
| `yieldAddress` | `string` |
| `asset` | `string` |
| `shares` | `BigNumber` |
| `sharesInLowestUnits?` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[api/yieldAndStrategy.ts:38](https://github.com/akshay111meher/sublime-sdk/blob/e2731c8/src/api/yieldAndStrategy.ts#L38)

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
- [getStrategy](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategy)
- [getStrategyAddress](api_yieldAndStrategy.YieldAndStrategyApi.md#getstrategyaddress)
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

[api/yieldAndStrategy.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L26)

## Properties

### config

• **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/yieldAndStrategy.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L23)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/yieldAndStrategy.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L22)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/yieldAndStrategy.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L24)

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

[api/yieldAndStrategy.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L77)

___

### getStrategies

▸ **getStrategies**(): [`Strategy`](../interfaces/types_Types.Strategy.md)[]

**`description`** returns strategies supported sublime-sdk

#### Returns

[`Strategy`](../interfaces/types_Types.Strategy.md)[]

#### Defined in

[api/yieldAndStrategy.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L102)

___

### getStrategy

▸ **getStrategy**(`address`): [`StrategyType`](../enums/types_Types.StrategyType.md)

**`description`** Get Strategy name from given address,

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`StrategyType`](../enums/types_Types.StrategyType.md)

null if invalid strategy address is given in input

#### Defined in

[api/yieldAndStrategy.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L135)

___

### getStrategyAddress

▸ **getStrategyAddress**(`strategy`): `string`

**`description`** Get Strategy address from name

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

null if invalid strategy name is given

#### Defined in

[api/yieldAndStrategy.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L120)

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

[api/yieldAndStrategy.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/c4b3a81/src/api/yieldAndStrategy.ts#L40)

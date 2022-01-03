[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/pool](../modules/api_pool.md) / PoolApi

# Class: PoolApi

[api/pool](../modules/api_pool.md).PoolApi

## Table of contents

### Constructors

- [constructor](api_pool.PoolApi.md#constructor)

### Properties

- [config](api_pool.PoolApi.md#config)
- [poolFactory](api_pool.PoolApi.md#poolfactory)
- [signer](api_pool.PoolApi.md#signer)
- [tokenManager](api_pool.PoolApi.md#tokenmanager)

### Methods

- [calculateCurrentPeriod](api_pool.PoolApi.md#calculatecurrentperiod)
- [createPool](api_pool.PoolApi.md#createpool)
- [depositCollateral](api_pool.PoolApi.md#depositcollateral)
- [generatePoolAddress](api_pool.PoolApi.md#generatepooladdress)
- [getBalanceDetails](api_pool.PoolApi.md#getbalancedetails)
- [getCurrentCollateralRatio](api_pool.PoolApi.md#getcurrentcollateralratio)
- [getInitCodehash](api_pool.PoolApi.md#getinitcodehash)
- [getLoanStatus](api_pool.PoolApi.md#getloanstatus)
- [getMarginCallEndTime](api_pool.PoolApi.md#getmargincallendtime)
- [getPoolInfo](api_pool.PoolApi.md#getpoolinfo)
- [getSalt](api_pool.PoolApi.md#getsalt)
- [getTotalSupply](api_pool.PoolApi.md#gettotalsupply)
- [interestPerPeriod](api_pool.PoolApi.md#interestperperiod)
- [interestPerSecond](api_pool.PoolApi.md#interestpersecond)
- [interestTillNow](api_pool.PoolApi.md#interesttillnow)
- [liquidateLender](api_pool.PoolApi.md#liquidatelender)
- [liquidatePool](api_pool.PoolApi.md#liquidatepool)

## Constructors

### constructor

• **new PoolApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[api/pool.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L32)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[api/pool.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L27)

___

### poolFactory

• `Private` **poolFactory**: `PoolFactory`

#### Defined in

[api/pool.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L30)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/pool.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L26)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[api/pool.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L28)

## Methods

### calculateCurrentPeriod

▸ **calculateCurrentPeriod**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L264)

___

### createPool

▸ **createPool**(`params`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PoolGenerateParams`](../interfaces/types_poolGenerateParam.PoolGenerateParams.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L39)

___

### depositCollateral

▸ **depositCollateral**(`poolContract`, `amount`, `transferFromSavingsAccount`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |
| `transferFromSavingsAccount` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:178](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L178)

___

### generatePoolAddress

▸ **generatePoolAddress**(`params`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PoolGenerateParams`](../interfaces/types_poolGenerateParam.PoolGenerateParams.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L102)

___

### getBalanceDetails

▸ **getBalanceDetails**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L280)

___

### getCurrentCollateralRatio

▸ **getCurrentCollateralRatio**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L210)

___

### getInitCodehash

▸ `Private` **getInitCodehash**(`proxyBytecode`, `poolImplAddr`, `poolData`, `admin`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxyBytecode` | `BytesLike` |
| `poolImplAddr` | `string` |
| `poolData` | `BytesLike` |
| `admin` | `string` |

#### Returns

`string`

#### Defined in

[api/pool.ts:372](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L372)

___

### getLoanStatus

▸ **getLoanStatus**(`poolContract`): `Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Defined in

[api/pool.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L274)

___

### getMarginCallEndTime

▸ **getMarginCallEndTime**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L269)

___

### getPoolInfo

▸ **getPoolInfo**(`poolContract`): `Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Defined in

[api/pool.ts:302](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L302)

___

### getSalt

▸ `Private` **getSalt**(`address`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `salt` | `BytesLike` |

#### Returns

`string`

#### Defined in

[api/pool.ts:368](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L368)

___

### getTotalSupply

▸ **getTotalSupply**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L292)

___

### interestPerPeriod

▸ **interestPerPeriod**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L237)

___

### interestPerSecond

▸ **interestPerSecond**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L250)

___

### interestTillNow

▸ **interestTillNow**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/pool.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L199)

___

### liquidateLender

▸ **liquidateLender**(`poolContract`, `lender`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:226](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L226)

___

### liquidatePool

▸ **liquidatePool**(`poolContract`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/pool.ts:216](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/api/pool.ts#L216)

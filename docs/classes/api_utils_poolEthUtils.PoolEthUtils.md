[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/utils/poolEthUtils](../modules/api_utils_poolEthUtils.md) / PoolEthUtils

# Class: PoolEthUtils

[api/utils/poolEthUtils](../modules/api_utils_poolEthUtils.md).PoolEthUtils

## Table of contents

### Constructors

- [constructor](api_utils_poolEthUtils.PoolEthUtils.md#constructor)

### Properties

- [config](api_utils_poolEthUtils.PoolEthUtils.md#config)
- [poolUtils](api_utils_poolEthUtils.PoolEthUtils.md#poolutils)
- [tokenManager](api_utils_poolEthUtils.PoolEthUtils.md#tokenmanager)

### Methods

- [addEthCollateralInMarginCall](api_utils_poolEthUtils.PoolEthUtils.md#addethcollateralinmargincall)
- [depositEthAsCollateralToPool](api_utils_poolEthUtils.PoolEthUtils.md#depositethascollateraltopool)
- [ethLend](api_utils_poolEthUtils.PoolEthUtils.md#ethlend)

## Constructors

### constructor

• **new PoolEthUtils**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/utils/poolEthUtils.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L16)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/utils/poolEthUtils.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L14)

___

### poolUtils

• `Private` **poolUtils**: `PoolUtils`

#### Defined in

[src/api/utils/poolEthUtils.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L12)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/utils/poolEthUtils.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L13)

## Methods

### addEthCollateralInMarginCall

▸ **addEthCollateralInMarginCall**(`poolAddress`, `lender`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Use this function to all margin call to a lender address when eth is the collateral

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolAddress` | `string` | Address of the pool |
| `lender` | `string` | - |
| `amount` | `string` | Amount of ETH to deposit |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/utils/poolEthUtils.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L47)

___

### depositEthAsCollateralToPool

▸ **depositEthAsCollateralToPool**(`poolAddress`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Use this function call to deposit ETH directly to a pool. The function call will automatically convert ETH to WETH and deposit to the pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolAddress` | `string` | Address of the pool |
| `amount` | `string` | Amount of ETH to deposit |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/utils/poolEthUtils.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L33)

___

### ethLend

▸ **ethLend**(`poolAddress`, `lender`, `amount`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Use this function to lend ETH to the pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolAddress` | `string` | Address of the pool |
| `lender` | `string` | Address of the lender to deposit on behalf of. (pass your own address if you want to deposit on behalf of your own address) |
| `amount` | `string` | Amount of ETH to deposit |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | Strategy to which the collateral is deposit |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/utils/poolEthUtils.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/utils/poolEthUtils.ts#L69)

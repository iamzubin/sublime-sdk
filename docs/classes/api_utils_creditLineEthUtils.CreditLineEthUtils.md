[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/utils/creditLineEthUtils](../modules/api_utils_creditLineEthUtils.md) / CreditLineEthUtils

# Class: CreditLineEthUtils

[api/utils/creditLineEthUtils](../modules/api_utils_creditLineEthUtils.md).CreditLineEthUtils

## Table of contents

### Constructors

- [constructor](api_utils_creditLineEthUtils.CreditLineEthUtils.md#constructor)

### Properties

- [config](api_utils_creditLineEthUtils.CreditLineEthUtils.md#config)
- [creditLineUtils](api_utils_creditLineEthUtils.CreditLineEthUtils.md#creditlineutils)
- [tokenManager](api_utils_creditLineEthUtils.CreditLineEthUtils.md#tokenmanager)

### Methods

- [depositEthAsCollateralToTheCreditLine](api_utils_creditLineEthUtils.CreditLineEthUtils.md#depositethascollateraltothecreditline)
- [repayEthToCreditLine](api_utils_creditLineEthUtils.CreditLineEthUtils.md#repayethtocreditline)

## Constructors

### constructor

• **new CreditLineEthUtils**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/utils/creditLineEthUtils.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L16)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/utils/creditLineEthUtils.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L14)

___

### creditLineUtils

• `Private` **creditLineUtils**: `CreditLineUtils`

#### Defined in

[src/api/utils/creditLineEthUtils.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L12)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/utils/creditLineEthUtils.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L13)

## Methods

### depositEthAsCollateralToTheCreditLine

▸ **depositEthAsCollateralToTheCreditLine**(`creditLineNumber`, `amount`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** The function should only be used when native ETH is used deposit collateral to a credit line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | credit line ID |
| `amount` | `string` | amount of ETH to be deposited as collateral |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | strategy to which the collateral must be deposited |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction parameters |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/utils/creditLineEthUtils.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L34)

___

### repayEthToCreditLine

▸ **repayEthToCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** The function should be used

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | id of the credit line |
| `amount` | `string` | amount of ETH that needs to be repaid to the credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction parameters |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/utils/creditLineEthUtils.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/e0a8c27/src/api/utils/creditLineEthUtils.ts#L63)

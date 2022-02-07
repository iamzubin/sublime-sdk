[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/utils/savingsAccountEthUtils](../modules/api_utils_savingsAccountEthUtils.md) / SavingAccountsEthUtils

# Class: SavingAccountsEthUtils

[api/utils/savingsAccountEthUtils](../modules/api_utils_savingsAccountEthUtils.md).SavingAccountsEthUtils

## Table of contents

### Constructors

- [constructor](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md#constructor)

### Properties

- [config](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md#config)
- [savingsAccountEthUtils](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md#savingsaccountethutils)
- [tokenManager](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md#tokenmanager)

### Methods

- [depositEthToSavingsAccount](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md#depositethtosavingsaccount)

## Constructors

### constructor

• **new SavingAccountsEthUtils**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

src/api/utils/savingsAccountEthUtils.ts:21

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

src/api/utils/savingsAccountEthUtils.ts:14

___

### savingsAccountEthUtils

• `Private` **savingsAccountEthUtils**: `SavingsAccountEthUtils`

#### Defined in

src/api/utils/savingsAccountEthUtils.ts:12

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

src/api/utils/savingsAccountEthUtils.ts:13

## Methods

### depositEthToSavingsAccount

▸ **depositEthToSavingsAccount**(`strategy`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Use this function to deposit ETH to savings account directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | strategy |
| `amount` | `string` | amount of ETH to deposit |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

src/api/utils/savingsAccountEthUtils.ts:38

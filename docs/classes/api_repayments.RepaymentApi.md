[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/repayments](../modules/api_repayments.md) / RepaymentApi

# Class: RepaymentApi

[api/repayments](../modules/api_repayments.md).RepaymentApi

## Table of contents

### Constructors

- [constructor](api_repayments.RepaymentApi.md#constructor)

### Properties

- [repayments](api_repayments.RepaymentApi.md#repayments)
- [signer](api_repayments.RepaymentApi.md#signer)
- [tokenManager](api_repayments.RepaymentApi.md#tokenmanager)

### Methods

- [didBorrowerDefault](api_repayments.RepaymentApi.md#didborrowerdefault)
- [getCurrentInstalmentInterval](api_repayments.RepaymentApi.md#getcurrentinstalmentinterval)
- [getCurrentLoanInterval](api_repayments.RepaymentApi.md#getcurrentloaninterval)
- [getGracePeriodFraction](api_repayments.RepaymentApi.md#getgraceperiodfraction)
- [getInstalmentsCompleted](api_repayments.RepaymentApi.md#getinstalmentscompleted)
- [getInterestDueTillInstalmentDeadline](api_repayments.RepaymentApi.md#getinterestduetillinstalmentdeadline)
- [getInterestLeft](api_repayments.RepaymentApi.md#getinterestleft)
- [getInterestOverdue](api_repayments.RepaymentApi.md#getinterestoverdue)
- [getInterestPerSecond](api_repayments.RepaymentApi.md#getinterestpersecond)
- [getNextInstalmentDeadline](api_repayments.RepaymentApi.md#getnextinstalmentdeadline)
- [getTotalRepaidAmount](api_repayments.RepaymentApi.md#gettotalrepaidamount)
- [isGracePenaltyApplicable](api_repayments.RepaymentApi.md#isgracepenaltyapplicable)
- [repayAmount](api_repayments.RepaymentApi.md#repayamount)
- [repayPrincipal](api_repayments.RepaymentApi.md#repayprincipal)

## Constructors

### constructor

• **new RepaymentApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/repayments.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L19)

## Properties

### repayments

• `Private` **repayments**: `Repayments`

#### Defined in

[src/api/repayments.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L16)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/repayments.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L15)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/repayments.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L17)

## Methods

### didBorrowerDefault

▸ **didBorrowerDefault**(`pool`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/repayments.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L64)

___

### getCurrentInstalmentInterval

▸ **getCurrentInstalmentInterval**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L52)

___

### getCurrentLoanInterval

▸ **getCurrentLoanInterval**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L56)

___

### getGracePeriodFraction

▸ **getGracePeriodFraction**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:112](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L112)

___

### getInstalmentsCompleted

▸ **getInstalmentsCompleted**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L35)

___

### getInterestDueTillInstalmentDeadline

▸ **getInterestDueTillInstalmentDeadline**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L39)

___

### getInterestLeft

▸ **getInterestLeft**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L68)

___

### getInterestOverdue

▸ **getInterestOverdue**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L77)

___

### getInterestPerSecond

▸ **getInterestPerSecond**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L26)

___

### getNextInstalmentDeadline

▸ **getNextInstalmentDeadline**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L48)

___

### getTotalRepaidAmount

▸ **getTotalRepaidAmount**(`pool`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/repayments.ts:103](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L103)

___

### isGracePenaltyApplicable

▸ **isGracePenaltyApplicable**(`pool`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/repayments.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L60)

___

### repayAmount

▸ **repayAmount**(`pool`, `amount`, `options`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `amount` | `string` |
| `options` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/repayments.ts:86](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L86)

___

### repayPrincipal

▸ **repayPrincipal**(`pool`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/repayments.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/9e19ccf/src/api/repayments.ts#L99)

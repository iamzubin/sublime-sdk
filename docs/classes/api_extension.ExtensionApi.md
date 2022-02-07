[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/extension](../modules/api_extension.md) / ExtensionApi

# Class: ExtensionApi

[api/extension](../modules/api_extension.md).ExtensionApi

## Table of contents

### Constructors

- [constructor](api_extension.ExtensionApi.md#constructor)

### Properties

- [extenstion](api_extension.ExtensionApi.md#extenstion)
- [signer](api_extension.ExtensionApi.md#signer)

### Methods

- [closeExtension](api_extension.ExtensionApi.md#closeextension)
- [requestExtenstion](api_extension.ExtensionApi.md#requestextenstion)
- [voteOnExtension](api_extension.ExtensionApi.md#voteonextension)

## Constructors

### constructor

• **new ExtensionApi**(`signer`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/api/extension.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L13)

## Properties

### extenstion

• `Private` **extenstion**: `Extension`

#### Defined in

[src/api/extension.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L10)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/extension.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L11)

## Methods

### closeExtension

▸ **closeExtension**(`options`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/extension.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L26)

___

### requestExtenstion

▸ **requestExtenstion**(`pool`, `options`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `options` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/extension.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L18)

___

### voteOnExtension

▸ **voteOnExtension**(`pool`, `options`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |
| `options` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/extension.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/extension.ts#L22)

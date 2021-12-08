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

[api/extension.ts:11](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L11)

## Properties

### extenstion

• `Private` **extenstion**: `Extension`

#### Defined in

[api/extension.ts:8](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L8)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[api/extension.ts:9](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L9)

## Methods

### closeExtension

▸ **closeExtension**(): `Promise`<`ContractTransaction`\>

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/extension.ts:24](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L24)

___

### requestExtenstion

▸ **requestExtenstion**(`pool`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/extension.ts:16](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L16)

___

### voteOnExtension

▸ **voteOnExtension**(`pool`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pool` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[api/extension.ts:20](https://github.com/akshay111meher/sublime-sdk/blob/14369ff/src/api/extension.ts#L20)

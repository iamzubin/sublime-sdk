[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/verification](../modules/api_verification.md) / VerificationAPI

# Class: VerificationAPI

[api/verification](../modules/api_verification.md).VerificationAPI

## Table of contents

### Constructors

- [constructor](api_verification.VerificationAPI.md#constructor)

### Properties

- [signer](api_verification.VerificationAPI.md#signer)
- [twitterVerifier](api_verification.VerificationAPI.md#twitterverifier)
- [verification](api_verification.VerificationAPI.md#verification)

### Methods

- [addVerifier](api_verification.VerificationAPI.md#addverifier)
- [isUser](api_verification.VerificationAPI.md#isuser)
- [isVerifier](api_verification.VerificationAPI.md#isverifier)
- [registerMasterAddress](api_verification.VerificationAPI.md#registermasteraddress)
- [registerSelfUsingAdminVerifier](api_verification.VerificationAPI.md#registerselfusingadminverifier)
- [unregisterSelfUsingAdminVerifier](api_verification.VerificationAPI.md#unregisterselfusingadminverifier)
- [updateSignerAddress](api_verification.VerificationAPI.md#updatesigneraddress)
- [updateVerification](api_verification.VerificationAPI.md#updateverification)

## Constructors

### constructor

• **new VerificationAPI**(`signer`, `config`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Signer` | Signer |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) | SublimeConfig |

#### Defined in

[src/api/verification.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L25)

## Properties

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/verification.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L17)

___

### twitterVerifier

• `Private` **twitterVerifier**: `TwitterVerifier`

#### Defined in

[src/api/verification.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L19)

___

### verification

• `Private` **verification**: `Verification`

#### Defined in

[src/api/verification.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L18)

## Methods

### addVerifier

▸ **addVerifier**(`verifier?`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract. (Default is the admin verifier) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:52](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L52)

___

### isUser

▸ **isUser**(`user`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | Address to check |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/verification.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L35)

___

### isVerifier

▸ **isVerifier**(`verifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verifier` | `string` | Address of the verifier contract |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/api/verification.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L44)

___

### registerMasterAddress

▸ **registerMasterAddress**(`_masterAddress`, `_isMasterLinked`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_masterAddress` | `string` | Master Address |
| `_isMasterLinked` | `boolean` | True if the master address is linked |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:61](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L61)

___

### registerSelfUsingAdminVerifier

▸ **registerSelfUsingAdminVerifier**(`_isMasterLinked`, `_v`, `_r`, `_s`, `_twitterId`, `_tweetId`, `_deadline`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_isMasterLinked` | `boolean` | True if the master address is linked |
| `_v` | `BigNumberish` | V component of the signature |
| `_r` | `BytesLike` | R component of the signature |
| `_s` | `BytesLike` | S component of the signature |
| `_twitterId` | `string` | Twitter ID of the user |
| `_tweetId` | `string` | - |
| `_deadline` | `BigNumberish` | Deadline for the registration |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L74)

___

### unregisterSelfUsingAdminVerifier

▸ **unregisterSelfUsingAdminVerifier**(`options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:90](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L90)

___

### updateSignerAddress

▸ **updateSignerAddress**(`_signerAddress`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_signerAddress` | `string` | Address of the signer |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L108)

___

### updateVerification

▸ **updateVerification**(`_verification`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_verification` | `string` | Address of the verification contract |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/verification.ts:99](https://github.com/sublime-finance/sublime-sdk/blob/c26eed8/src/api/verification.ts#L99)

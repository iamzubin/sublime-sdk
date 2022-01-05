[sublime-sdk](../README.md) / [Modules](../modules.md) / [tokenManager](../modules/tokenManager.md) / TokenManager

# Class: TokenManager

[tokenManager](../modules/tokenManager.md).TokenManager

**`description`** An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.

## Table of contents

### Constructors

- [constructor](tokenManager.TokenManager.md#constructor)

### Properties

- [addressMapper](tokenManager.TokenManager.md#addressmapper)
- [decimals](tokenManager.TokenManager.md#decimals)
- [logoUrlTemplate](tokenManager.TokenManager.md#logourltemplate)
- [logos](tokenManager.TokenManager.md#logos)
- [names](tokenManager.TokenManager.md#names)
- [priceLastUpdatedAt](tokenManager.TokenManager.md#pricelastupdatedat)
- [priceRefreshInterval](tokenManager.TokenManager.md#pricerefreshinterval)
- [priceSubgraphUrl](tokenManager.TokenManager.md#pricesubgraphurl)
- [prices](tokenManager.TokenManager.md#prices)
- [signer](tokenManager.TokenManager.md#signer)
- [subgraph](tokenManager.TokenManager.md#subgraph)

### Methods

- [getLogo](tokenManager.TokenManager.md#getlogo)
- [getPricePerAsset](tokenManager.TokenManager.md#getpriceperasset)
- [getTokenDecimals](tokenManager.TokenManager.md#gettokendecimals)
- [getTokenName](tokenManager.TokenManager.md#gettokenname)
- [updateAll](tokenManager.TokenManager.md#updateall)
- [updateLogo](tokenManager.TokenManager.md#updatelogo)
- [updatePricePerAsset](tokenManager.TokenManager.md#updatepriceperasset)
- [updateTokenDecimals](tokenManager.TokenManager.md#updatetokendecimals)
- [updateTokenName](tokenManager.TokenManager.md#updatetokenname)

## Constructors

### constructor

• **new TokenManager**(`signer`, `priceSubgraphUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `priceSubgraphUrl` | `string` |

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L68)
=======
[tokenManager.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L68)
>>>>>>> main

## Properties

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L44)
=======
[tokenManager.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L44)
>>>>>>> main

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L19)
=======
[tokenManager.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L19)
>>>>>>> main

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L49)
=======
[tokenManager.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L49)
>>>>>>> main

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L39)
=======
[tokenManager.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L39)
>>>>>>> main

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L24)
=======
[tokenManager.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L24)
>>>>>>> main

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L34)
=======
[tokenManager.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L34)
>>>>>>> main

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L59)
=======
[tokenManager.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L59)
>>>>>>> main

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L54)
=======
[tokenManager.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L54)
>>>>>>> main

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L29)
=======
[tokenManager.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L29)
>>>>>>> main

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L64)
=======
[tokenManager.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L64)
>>>>>>> main

___

### subgraph

• `Private` **subgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L66)
=======
[tokenManager.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L66)
>>>>>>> main

## Methods

### getLogo

▸ **getLogo**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

return url which renders the logo/pic of the token

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L206)
=======
[tokenManager.ts:206](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L206)
>>>>>>> main

___

### getPricePerAsset

▸ **getPricePerAsset**(`tokenAddress`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`BigNumber`\>

price of asset

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L192)
=======
[tokenManager.ts:192](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L192)
>>>>>>> main

___

### getTokenDecimals

▸ **getTokenDecimals**(`tokenAddress`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`number`

number of token decimals

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L166)
=======
[tokenManager.ts:166](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L166)
>>>>>>> main

___

### getTokenName

▸ **getTokenName**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

token name

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L179)
=======
[tokenManager.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L179)
>>>>>>> main

___

### updateAll

▸ **updateAll**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates the token meta data

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L84)
=======
[tokenManager.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L84)
>>>>>>> main

___

### updateLogo

▸ **updateLogo**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token Logo

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L148)
=======
[tokenManager.ts:148](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L148)
>>>>>>> main

___

### updatePricePerAsset

▸ **updatePricePerAsset**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token price

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L129)
=======
[tokenManager.ts:129](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L129)
>>>>>>> main

___

### updateTokenDecimals

▸ **updateTokenDecimals**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updated the token decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L97)
=======
[tokenManager.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L97)
>>>>>>> main

___

### updateTokenName

▸ **updateTokenName**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token name

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[tokenManager.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/e03df8a/src/tokenManager.ts#L113)
=======
[tokenManager.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/7f1ca5d/src/tokenManager.ts#L113)
>>>>>>> main

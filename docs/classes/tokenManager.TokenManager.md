[sublime-sdk](../README.md) / [Modules](../modules.md) / [tokenManager](../modules/tokenManager.md) / TokenManager

# Class: TokenManager

[tokenManager](../modules/tokenManager.md).TokenManager

**`description`** An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.

## Table of contents

### Constructors

- [constructor](tokenManager.TokenManager.md#constructor)

### Properties

- [OverviewRefreshInterval](tokenManager.TokenManager.md#overviewrefreshinterval)
- [addressMapper](tokenManager.TokenManager.md#addressmapper)
- [creditLineMapper](tokenManager.TokenManager.md#creditlinemapper)
- [creditlineLastUpdatedAt](tokenManager.TokenManager.md#creditlinelastupdatedat)
- [decimals](tokenManager.TokenManager.md#decimals)
- [logoUrlTemplate](tokenManager.TokenManager.md#logourltemplate)
- [logos](tokenManager.TokenManager.md#logos)
- [names](tokenManager.TokenManager.md#names)
- [priceLastUpdatedAt](tokenManager.TokenManager.md#pricelastupdatedat)
- [priceRefreshInterval](tokenManager.TokenManager.md#pricerefreshinterval)
- [priceSubgraphUrl](tokenManager.TokenManager.md#pricesubgraphurl)
- [prices](tokenManager.TokenManager.md#prices)
- [savingsAccountLastUpdatedAt](tokenManager.TokenManager.md#savingsaccountlastupdatedat)
- [savingsAccountMapper](tokenManager.TokenManager.md#savingsaccountmapper)
- [signer](tokenManager.TokenManager.md#signer)
- [subgraph](tokenManager.TokenManager.md#subgraph)

### Methods

- [getLogo](tokenManager.TokenManager.md#getlogo)
- [getPricePerAsset](tokenManager.TokenManager.md#getpriceperasset)
- [getTokenDecimals](tokenManager.TokenManager.md#gettokendecimals)
- [getTokenName](tokenManager.TokenManager.md#gettokenname)
- [updateAll](tokenManager.TokenManager.md#updateall)
- [updateCreditlineOverview](tokenManager.TokenManager.md#updatecreditlineoverview)
- [updateLogo](tokenManager.TokenManager.md#updatelogo)
- [updatePricePerAsset](tokenManager.TokenManager.md#updatepriceperasset)
- [updateSavingsAccountOverview](tokenManager.TokenManager.md#updatesavingsaccountoverview)
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

[tokenManager.ts:93](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L93)

## Properties

### OverviewRefreshInterval

• `Private` **OverviewRefreshInterval**: `number` = `60000`

**`description`** interval at which user details are refreshed in the SDK

#### Defined in

[tokenManager.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L69)

___

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

[tokenManager.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L44)

___

### creditLineMapper

• `Private` **creditLineMapper**: `Object` = `{}`

**`description`** used for mapping user with the credit lines

#### Defined in

[tokenManager.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L49)

___

### creditlineLastUpdatedAt

• `Private` **creditlineLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the credit line was updated

#### Defined in

[tokenManager.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L59)

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

[tokenManager.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L19)

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

[tokenManager.ts:74](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L74)

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

[tokenManager.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L39)

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

[tokenManager.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L24)

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

[tokenManager.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L34)

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

[tokenManager.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L84)

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

[tokenManager.ts:79](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L79)

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

[tokenManager.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L29)

___

### savingsAccountLastUpdatedAt

• `Private` **savingsAccountLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the savings account was updated

#### Defined in

[tokenManager.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L64)

___

### savingsAccountMapper

• `Private` **savingsAccountMapper**: `Object` = `{}`

**`description`** used for mapping user with savings account

#### Defined in

[tokenManager.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L54)

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

[tokenManager.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L89)

___

### subgraph

• `Private` **subgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[tokenManager.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L91)

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

[tokenManager.ts:231](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L231)

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

[tokenManager.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L217)

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

[tokenManager.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L191)

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

[tokenManager.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L204)

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

[tokenManager.ts:109](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L109)

___

### updateCreditlineOverview

▸ **updateCreditlineOverview**(`user`): `Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | the address for which the overview is required |

#### Returns

`Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

return credit line information

#### Defined in

[tokenManager.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L244)

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

[tokenManager.ts:173](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L173)

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

[tokenManager.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L154)

___

### updateSavingsAccountOverview

▸ **updateSavingsAccountOverview**(`user`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | the address for which the overview is required |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

return savings account information

#### Defined in

[tokenManager.ts:260](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L260)

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

[tokenManager.ts:122](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L122)

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

[tokenManager.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/1501c54/src/tokenManager.ts#L138)

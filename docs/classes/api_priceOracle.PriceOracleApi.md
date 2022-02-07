[sublime-sdk](../README.md) / [Modules](../modules.md) / [api/priceOracle](../modules/api_priceOracle.md) / PriceOracleApi

# Class: PriceOracleApi

[api/priceOracle](../modules/api_priceOracle.md).PriceOracleApi

## Table of contents

### Constructors

- [constructor](api_priceOracle.PriceOracleApi.md#constructor)

### Properties

- [config](api_priceOracle.PriceOracleApi.md#config)
- [priceOracleContract](api_priceOracle.PriceOracleApi.md#priceoraclecontract)

### Methods

- [getLatestPrice](api_priceOracle.PriceOracleApi.md#getlatestprice)

## Constructors

### constructor

• **new PriceOracleApi**(`signer`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/api/priceOracle.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/priceOracle.ts#L15)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/priceOracle.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/priceOracle.ts#L13)

___

### priceOracleContract

• `Private` **priceOracleContract**: `PriceOracle`

#### Defined in

[src/api/priceOracle.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/priceOracle.ts#L12)

## Methods

### getLatestPrice

▸ **getLatestPrice**(`num`, `den`): `Promise`<`string`\>

**`description`** Returns the

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |

#### Returns

`Promise`<`string`\>

price of token1 in terms of token2

#### Defined in

[src/api/priceOracle.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/711fd4e/src/api/priceOracle.ts#L26)

import { InternalTokenMap } from '../types/Types';

export const tokenData: InternalTokenMap[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    iconMapping: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  {
    address: '0x41B5844f4680a8C38fBb695b7F9CFd1F64474a72',
    name: 'Compound ETH',
    symbol: 'cETH',
    decimals: 8,
    iconMapping: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
  },
  {
    address: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
    name: 'DAI',
    symbol: 'DAI',
    decimals: 18,
    iconMapping: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  {
    address: '0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD'.toLowerCase(),
    name: 'Compound DAI',
    symbol: 'cDAI',
    decimals: 8,
    iconMapping: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'.toLowerCase(),
  },
];

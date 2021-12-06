const kovanCDai = () => {
  const temp = {};
  temp['0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD'.toLowerCase()] = '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'.toLowerCase();
  return temp;
};

export const tokenMap = {
  '0x0000000000000000000000000000000000000000': '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase(),
  '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa': '0x6b175474e89094c44da98b954eedeac495271d0f'.toLowerCase(),
  ...kovanCDai(),
};

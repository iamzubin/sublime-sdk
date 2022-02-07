/**
 * Hold the contract addresses in Sublime App
 */
export interface SublimeConfig {
  poolFactoryContractAddress: string;
  creditLineContractAddress: string;
  poolLogicContractAddress: string;
  savingsAccountContractAddress: string;
  strategyRegistryContractAddress: string;
  verificationContractAddress: string;
  aaveStrategyContractAddress: string;
  compoundStrategyContractAddress: string;
  yearnStrategyContractAddress: string;
  noStrategyAddress: string;
  repaymentContractAddress: string;
  extensionContractAddress: string;
  adminVerifierContractAddress: string;
  priceOracleContractAddress: string;
  creditLineEthHelperAddress?: string;
  poolUtilsAddress?: string;
  savingsAccountEthUtilsAddress?: string;
}

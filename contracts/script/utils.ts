export const getChainPrefix = (chainId: bigint): `0x${string}` => {
  switch (chainId) {
    case 59141n: // Linea Sepolia
      return "0x0000000000000000000000000000000000000000000000000000000000000000";
    case 59144n: // Linea mainnet
      return "0x0000000000000000000000000000000000000000000000000000000000000000";
    case 421613n: // Arbitrum testnet
      return "0x0001000000000000000000000000000000000000000000000000000000000000";
    case 421614n: // Arbitrum Sepolia
      return "0x0001000000000000000000000000000000000000000000000000000000000000";
    case 42161n: // Arbitrum mainnet
      return "0x0001000000000000000000000000000000000000000000000000000000000000";
    case 42170n: // Arbitrum nova
      return "0x0002000000000000000000000000000000000000000000000000000000000000";
    case 84532n: // Base Sepolia
      return "0x0005000000000000000000000000000000000000000000000000000000000000";
    case 8453n: // Base mainnet
      return "0x0005000000000000000000000000000000000000000000000000000000000000";
    case 97n: // BSC testnet
      return "0x0006000000000000000000000000000000000000000000000000000000000000";
    case 56n: // BSC mainnet
      return "0x0006000000000000000000000000000000000000000000000000000000000000";
    default:
      throw new Error("Unknown network");
  }
};

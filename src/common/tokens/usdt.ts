import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

/**
 * USDT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDT {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      decimals: 18,
      symbol: 'USDT',
      name: 'Tether USD',
    };
  }

  public static POLYGON() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      decimals: 18,
      symbol: 'USDT',
      name: 'Tether USD',
    };
  }

  /**
   * Get USDT token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number) {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.POLYGON:
        return this.POLYGON();
      default:
        throw new SushiswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}

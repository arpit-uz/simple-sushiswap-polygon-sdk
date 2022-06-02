import { JsonFragment } from '@ethersproject/abi';

export class ContractContext {
  /**
   * The sushiswap router address
   */
  public static routerAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';

  /**
   * The sushiswap factory address
   */
  public static factoryAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';

  /**
   * The sushiswap pair address
   */
  public static pairAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';

  /**
   * sushiswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/sushiswap-router-v2.json');

  /**
   * sushiswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/sushiswap-factory-v2.json');

  /**
   * sushiswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/sushiswap-pair-v2.json');

  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require('../ABI/erc-20-abi.json');
}

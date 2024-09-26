
import { DeployUniswapV3Action, type actions } from '@infinit-xyz/uniswap-v3/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

// TODO: Replace with actual params
const params: Param = {


  // TODO: Native currency label (e.g., ETH)
  "nativeCurrencyLabel": undefined,


  // TODO: Address of the owner of the proxy admin
  "proxyAdminOwner": undefined,


  // TODO: Address of the owner of factory
  "factoryOwner": undefined,


  // TODO: Address of the wrapped native token (e.g., WETH)
  "wrappedNativeToken": undefined
}

// TODO: Replace with actual signer id
const signer = {
  "deployer": ""
}

export default { params, signer, Action: DeployUniswapV3Action }


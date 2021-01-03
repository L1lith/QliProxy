import createShimClone from './functions/createShimClone'
import createBasicProxy from './functions/createBasicProxy'

function ShimProxy() {}

const proxyWrapperOptions = {
  object: ShimProxy,
  writable: false,
  readable: true,
  construct: (originalObject, ...args) => {
    return createShimClone.apply(null, args)
  },
  execute: (originalObject, ...args) => {
    return createShimClone.apply(null, args)
  }
}

export default createBasicProxy(proxyWrapperOptions)

import createShimClone from './functions/createShimClone'
import createBasicProxy from './functions/createBasicProxy'

class ShimClone {
  constructor() {
    throw new Error("This constructor cannot be called directly")
  }
}

const proxyWrapperOptions = {
  object: ShimClone,
  writable: false,
  readable: false,
  construct: (originalObject, ...args) => {
    return createShimClone.apply(null, args)
  },
  execute: (originalObject, ...args) => {
    return createShimClone.apply(null, args)
  }
}

export default createBasicProxy(proxyWrapperOptions)

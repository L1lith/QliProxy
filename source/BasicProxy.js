import {createBasicProxy} from './functions/createBasicProxy'

class BasicProxy {
  constructor() {
    // Do Nothing
  }
}

const proxyWrapperOptions = {
  object: BasicProxy,
  writable: false,
  readable: false,
  construct: (originalObject, store, args) => {
    return createBasicProxy.apply(null, [args])
  }
}

export default createBasicProxy(proxyWrapperOptions)

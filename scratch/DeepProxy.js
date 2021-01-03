import createDeepProxy from './functions/createDeepProxy'
import createBasicProxy from './functions/createBasicProxy'

function DeepProxy() {
  //throw new Error("This constructor cannot be called directly")
  // Do Nothing
}

const proxyWrapperOptions = {
  object: DeepProxy,
  writable: false,
  readable: true,
  construct: (originalObject, ...args) => {
    return createDeepProxy.apply(null, args)
  },
  execute: (originalObject, ...args) => {
    return createDeepProxy.apply(null, args)
  }
}

export default createBasicProxy(proxyWrapperOptions)

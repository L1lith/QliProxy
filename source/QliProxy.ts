import createBasicProxy from './functions/createBasicProxy'

// class QliProxy {
//   constructor() {
//     throw new Error("This constructor cannot be called directly")
//   }
// }
function QliProxy(): void {
  //throw new Error("This constructor cannot be called directly")
  // Do Nothing
}

const BasicProxyOptions: proxyWrapperOptions = {
  object: QliProxy,
  writable: false,
  readable: true,
  construct: (originalObject, ...args) => {
    return createBasicProxy.apply(null, args)
  },
  execute: (originalObject, ...args) => {
    return createBasicProxy.apply(null, args)
  }
}

export default createBasicProxy(proxyWrapperOptions)

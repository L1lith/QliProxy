import createBasicProxy from './functions/createBasicProxy'

// class QliProxy {
//   constructor() {
//     throw new Error("This constructor cannot be called directly")
//   }
// }
function QliProxy() {
  //throw new Error("This constructor cannot be called directly")
  // Do Nothing
}

const proxyWrapperOptions = {
  object: QliProxy,
  writable: false,
  readable: true,
  construct: (dataSources, args) => {
    return createBasicProxy.apply(null, args)
  },
  execute: (dataSources, target, args) => {
    return createBasicProxy.apply(null, args)
  }
}

export default createBasicProxy(proxyWrapperOptions)

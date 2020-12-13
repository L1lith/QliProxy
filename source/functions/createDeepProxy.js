import createBasicProxy from './createBasicProxy'

const reservedOptions = ['get', 'set', 'delete', 'execute', 'object']

function createDeepProxy(sourceObject, originalOptions={}, propertyChain=[]) {
  let newOptions = {...originalOptions}
  newOptions.object = sourceObject
  reservedOptions.forEach(reservedOption => {
    delete newOptions[reservedOption]
  })
  if (originalOptions.hasOwnProperty('get')) {
    newOptions.get = (...args) => {
      const prop = args[1]
      const newPropertyChain = propertyChain.concat([prop])
      const result = originalOptions.get([...newPropertyChain], ...args)
      if (typeof result == 'function' || typeof result == 'object') {
        return createDeepProxy(result, originalOptions, newPropertyChain)
      } else {
        return result
      }
    }
  }
  if (originalOptions.hasOwnProperty('set')) {
    newOptions.set = (...args) => {
      const prop = args[1]
      const newPropertyChain = propertyChain.concat([prop])
      const result = originalOptions.set([...newPropertyChain], ...args)
      if (typeof result == 'function' || typeof result == 'object') {
        return createDeepProxy(result, originalOptions, newPropertyChain)
      } else {
        return result
      }
    }
  }
  if (typeof sourceObject == 'function') {
    newOptions.execute = (target, thisArg, args) => {
      let result
      if (oldOptions.hasOwnProperty('execute')) {
        result = oldOptions.execute.apply([sourceObject, thisArg, ...args])
      } else {
        const result = sourceObject.apply(thisArg, args)
      }
      if (typeof result == 'function' || typeof result == 'object') {
        return createDeepProxy(result, originalOptions, propertyChain)
      } else {
        return result
      }
    }
  }
  return createBasicProxy(newOptions)
}

export default createDeepProxy

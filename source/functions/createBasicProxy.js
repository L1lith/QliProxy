const readOptions = ["allow", "error", "undefined"]
const writeOptions = ["allow", "error", "silent"]


function createBasicProxy(options={}) {
  const originalObject = (typeof options.object == 'object' && options.object !== null) || typeof options.object == 'function' ? options.object : null
  const proxyOptions = {}
  const privateStore = typeof options.store == 'object' && options.store !== null ? options.store : {}
  const dataSources = [originalObject, privateStore]
  let read
  if (!options.hasOwnProperty('read')) {
    read = "allow"
  } else if (typeof options.read == 'string') {
    if (!readOptions.includes(options.read)) throw new Error("Invalid Read Option")
    read = options.read
  } else if (typeof options.read == 'boolean') {
    read = options.read ? 'allow' : 'undefined'
  } else {
    throw new Error("Invalid Read Option")
  }
  //const write = typeof options.write == 'string' && writeOptions.includes(options.write) ? options.write : options.write ? 'allow' : 'silent'
  if (options.hasOwnProperty('execute')) {
    proxyOptions.execute = (target, thisArg, args) => {
      return options.execute.apply(thisArg, dataSources.concat(args))
    }
  }
  let write
  if (!options.hasOwnProperty('write')) {
    write = "allow"
  } else if (typeof options.write == 'string') {
    if (!writeOptions.includes(options.write)) throw new Error("Invalid Write Option")
    write = options.write
  } else if (typeof options.write == 'boolean') {
    write = options.write ? 'allow' : 'silent'
  } else {
    throw new Error("Invalid Write Option")
  }
  if (typeof options.get == 'function') {
    if (read !== "allow") throw new Error("Reading is not allowed but a get function was also supplied")
    proxyOptions.get = (target, args) => {
      return options.get.apply(null, dataSources.concat(args))
    }
  } else if (read === "error") {
    proxyOptions.get = () => {
      throw new Error("Reading is not allowed")
    }
  } else if (read === "undefined") {
    proxyOptions.get = () => {
      return undefined
    }
  }
  if (typeof options.set == 'function') {
    if (write !== "allow") throw new Error("Writing is not allowed but a set function was also supplied")
    proxyOptions.set = (target, ...args) => {
      const result = options.set.apply(null, dataSources.concat(args))
      if (typeof result == 'boolean') {
        return result
      } else {
        return true
      }
    }
  } else if (write === "error") {
    proxyOptions.set = () => {
      throw new Error("Writing properties is not allowed")
    }
  } else if (write === "silent") {
    proxyOptions.set = () => {
      return true
    }
  }
  if (typeof options.delete == 'function') {
    if (write !== "allow") throw new Error("Writing is not allowed but a delete function was also supplied")
    proxyOptions.deleteProperty = (target, ...args) => {
      const result = options.delete.apply(null, dataSources.concat(args))
      if (typeof result == 'boolean') {
        return result
      } else {
        return true
      }
    }
  } else if (write === "error") {
    proxyOptions.deleteProperty = () => {
      throw new Error("Writing properties is not allowed")
    }
  } else if (write === "silent") {
    proxyOptions.deleteProperty = () => {
      return true
    }
  }

  if (typeof options.construct == 'function') {
    proxyOptions.construct = (target, args) => {
      return options.construct.apply(null, dataSources.concat(args))
    }
  }
  if (typeof options.getKeys == 'function') {
    proxyOptions.enumerate = proxyOptions.ownKeys = () => options.getKeys(...dataSources)
  }
  if (typeof options.has == 'function') {
    proxyOptions.has = ()=>options.has(...dataSources)
  }
  return new Proxy(originalObject !== null ? originalObject : (options.hasOwnProperty('execute') ? ()=>{} : {}), proxyOptions)
}

export default createBasicProxy

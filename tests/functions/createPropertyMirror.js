const { QliProxy, DeepProxy } = require('../../dist/Qliproxy-commonjs')

function createPropertyMirror(propertyValue, type="basic") {
  const options = {get: ()=>propertyValue}
  if (type === "basic") {
    return QliProxy(options)
  } else if (type === "deep") {
    return DeepProxy({}, options)
  } else {
    throw new Error("Invalid Type Value")
  }
}

module.exports = createPropertyMirror

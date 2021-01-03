const { QliProxy } = require('../../dist/Qliproxy-commonjs')

function createPropertyMirror(propertyValue) {
  const options = { get: () => propertyValue }
  return QliProxy(options)
}

module.exports = createPropertyMirror

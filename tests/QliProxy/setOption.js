const { basicDataExamples, complexDataExamples } = require('../boiler')
const { assert } = require('chai')
const createPropertyMirror = require('../functions/createPropertyMirror')
const makeIDString = require('../functions/makeIDString')
const { QliProxy } = require('../../dist/Qliproxy-commonjs')
const { details, ANY } = require('sandhands')

const interceptorArgumentsFormat = {
  _: [
    {
      object: ANY,
      store: Object
    },
    String,
    ANY
  ],
  strict: false
}

describe('QliProxy calls the interceptor correctly when setting', () => {
  const testProp = makeIDString()
  const testValue = Symbol()
  let caughtArgs
  let wasCalled = false
  const customSetter = (...args) => {
    wasCalled = true
    caughtArgs = args
  }
  const proxy = QliProxy({
    object: {},
    set: customSetter
  })
  proxy[testProp] = testValue
  it('calls the set interceptor in the first place', () => {
    assert.isOk(wasCalled)
  })
  if (wasCalled) {
    const [dataSources, inputProp, value] = caughtArgs
    //throw require('util').inspect(caughtArgs)
    it('passes the arguments correctly to the interceptor function', () => {
      assert.strictEqual(details(caughtArgs, interceptorArgumentsFormat), null)
    })
  }
})

describe('QliProxy returns properties correctly with basic data examples when using the set option and randomizing property names', () => {
  Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
    const oldProp = makeIDString()
    const newProp = makeIDString()
    const customSetter = ({ object }, inputProp, value) => {
      object[newProp] = value
    }
    const proxy = QliProxy({
      object: {},
      set: customSetter
    })
    proxy[oldProp] = dataExample
    it(`Returns the value correctly when setting, renaming, and retrieving the ${exampleName} data example`, () => {
      assert.deepEqual(dataExample, proxy[newProp])
    })
  })
})

describe('QliProxy returns properties correctly with complex data examples when using the set option and randomizing property names', () => {
  Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
    const oldProp = makeIDString()
    const newProp = makeIDString()
    const customSetter = ({ object }, inputProp, value) => {
      object[newProp] = value
    }
    const proxy = QliProxy({
      object: {},
      set: customSetter
    })
    proxy[oldProp] = dataExample
    it(`Returns the value correctly when setting, renaming, and retrieving the ${exampleName} data example`, () => {
      assert.deepEqual(dataExample, proxy[newProp])
    })
  })
})

// describe('QliProxy returns properties correctly with complex data examples when using the set option', () => {
//   Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
//     const proxy = createPropertyMirror(dataExample, 'basic')
//     const randomTestProperty = makeIDString()
//     let isDataNaN = false
//     try {
//       isDataNaN = isNaN(dataExample)
//     } catch (error) {}
//     it(`Returns the value correctly when retrieving the "${exampleName}" data example`, () => {
//       if (isDataNaN) {
//         assert.ok(isNaN(proxy[randomTestProperty]))
//       } else {
//         assert.strictEqual(dataExample, proxy[randomTestProperty])
//       }
//     })
//   })
// })

// describe('QliProxy stores and returns properties correctly with basic data examples when using the get option', () => {
//   Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
//     const proxy = QliProxy()
//     const randomTestProperty = makeIDString()
//     let isDataNaN = false
//     try {
//       isDataNaN = isNaN(dataExample)
//     } catch (error) {}
//     it(`Returns undefined before storing the property`, () => {
//       assert.strictEqual(proxy[randomTestProperty], undefined)
//     })
//     it(`Returns the value correctly when retrieving the "${exampleName}" data example after being stored`, () => {
//       proxy[randomTestProperty] = dataExample
//       if (isDataNaN) {
//         assert.ok(isNaN(proxy[randomTestProperty]))
//       } else {
//         assert.strictEqual(dataExample, proxy[randomTestProperty])
//       }
//     })
//   })
// })

// describe('QliProxy stores and returns properties correctly with complex data examples when using the get option', () => {
//   Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
//     const proxy = QliProxy()
//     const randomTestProperty = makeIDString()
//     let isDataNaN = false
//     try {
//       isDataNaN = isNaN(dataExample)
//     } catch (error) {}
//     it(`Returns undefined before storing the property`, () => {
//       assert.strictEqual(proxy[randomTestProperty], undefined)
//     })
//     it(`Returns the value correctly when retrieving the "${exampleName}" data example after being stored`, () => {
//       proxy[randomTestProperty] = dataExample
//       if (isDataNaN) {
//         assert.ok(isNaN(proxy[randomTestProperty]))
//       } else {
//         assert.strictEqual(dataExample, proxy[randomTestProperty])
//       }
//     })
//   })
// })

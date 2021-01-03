const { basicDataExamples, complexDataExamples } = require('../boiler')
const { assert } = require('chai')
const createPropertyMirror = require('../functions/createPropertyMirror')
const makeIDString = require('../functions/makeIDString')
const { QliProxy } = require('../../dist/Qliproxy-commonjs')

/*{
      set: ([target], inputProp, value) => {
        target[newProp] = value
      }
    } */

describe('QliProxy returns properties correctly with basic data examples when using the set option and randomizing property names', () => {
  Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
    const oldProp = makeIDString()
    const newProp = makeIDString()
    const customSetter = ([target], inputProp, value) => {
      target[newProp] = value
    }
    const proxy = QliProxy({
      object: {},
      set: customSetter
    })
    proxy[oldProp] = dataExample
    it(`Returns the value correctly when setting, renaming, and retrieving the ${exampleName} data example`, () => {
      assert.strictEqual(dataExample, proxy[newProp])
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

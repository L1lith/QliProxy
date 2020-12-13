const { basicDataExamples, complexDataExamples } = require("../boiler")
const { assert } = require('chai')
const createPropertyMirror = require('../functions/createPropertyMirror')
const makeIDString = require('../functions/makeIDString')
const {ShimProxy} = require('../../dist/Qliproxy-commonjs')


describe('ShimProxy returns properties correctly with basic data examples when accessing the original object', () => {
  Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
    const originalObject = {}
    const randomTestProperty = makeIDString()
    originalObject[randomTestProperty] = dataExample
    const proxy = ShimProxy()
    it(`Returns the value correctly when retrieving the ${exampleName} data example`, ()=>{
      assert.strictEqual(dataExample, proxy[randomTestProperty])
    })
  })
})

describe('ShimProxy returns properties correctly with complex data examples when accessing the original object', () => {
  Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
    const originalObject = {}
    const randomTestProperty = makeIDString()
    originalObject[randomTestProperty] = dataExample
    const proxy = ShimProxy()
    let isDataNaN = false
    try {
      isDataNaN = isNaN(dataExample)
    } catch(error) {}
    it(`Returns the value correctly when retrieving the "${exampleName}" data example`, ()=>{
      if (isDataNaN) {
        assert.ok(isNaN(proxy[randomTestProperty]))
      } else {
        assert.strictEqual(dataExample, proxy[randomTestProperty])
      }
    })
  })
})

describe('ShimProxy stores and returns properties correctly with basic data examples when using the get option', () => {
  Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
    const proxy = ShimProxy()
    const randomTestProperty = makeIDString()
    let isDataNaN = false
    try {
      isDataNaN = isNaN(dataExample)
    } catch(error) {}
    it(`Returns undefined before storing the property`, ()=>{
      assert.strictEqual(proxy[randomTestProperty], undefined)
    })
    it(`Returns the value correctly when retrieving the "${exampleName}" data example after being stored`, ()=>{
      proxy[randomTestProperty] = dataExample
      if (isDataNaN) {
        assert.ok(isNaN(proxy[randomTestProperty]))
      } else {
        assert.strictEqual(dataExample, proxy[randomTestProperty])
      }
    })
  })
})

describe('ShimProxy stores and returns properties correctly with complex data examples when using the get option', () => {
  Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
    const proxy = ShimProxy()
    const randomTestProperty = makeIDString()
    let isDataNaN = false
    try {
      isDataNaN = isNaN(dataExample)
    } catch(error) {}
    it(`Returns undefined before storing the property`, ()=>{
      assert.strictEqual(proxy[randomTestProperty], undefined)
    })
    it(`Returns the value correctly when retrieving the "${exampleName}" data example after being stored`, ()=>{
      proxy[randomTestProperty] = dataExample
      if (isDataNaN) {
        assert.ok(isNaN(proxy[randomTestProperty]))
      } else {
        assert.strictEqual(dataExample, proxy[randomTestProperty])
      }
    })
  })
})

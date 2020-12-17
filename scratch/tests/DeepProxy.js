const { basicDataExamples, complexDataExamples } = require("../boiler")
const { assert } = require('chai')
const createPropertyMirror = require('../functions/createPropertyMirror')
const makeIDString = require('../functions/makeIDString')


// This test is disabled as trying to access properties for the task of seeking equality is difficult. If we create an infinitely recursive object it becomes impossible to compare to another object for equality as attempting to access them in a recursive fashion will result in a max stack size exceeded error (stack overflow)

//
// describe('Deep Proxy returns properties correctly with basic data examples when using the get option', () => {
//   Object.entries(basicDataExamples).forEach(([exampleName, dataExample]) => {
//     const proxy = createPropertyMirror(dataExample, "deep")
//     const randomTestProperty = makeIDString()
//     it(`Returns the value correctly when retrieving the ${exampleName} data example`, ()=>{
//       assert.strictEqual(proxy[randomTestProperty], dataExample)
//     })
//   })
// })
//
// describe('Deep Proxy returns properties correctly with complex data examples when using the get option', () => {
//   Object.entries(complexDataExamples).forEach(([exampleName, dataExample]) => {
//     const proxy = createPropertyMirror(dataExample, "deep")
//     const randomTestProperty = makeIDString()
//     it(`Returns the value correctly when retrieving the "${exampleName}" data example`, ()=>{
//       assert.strictEqual(proxy[randomTestProperty], dataExample)
//     })
//   })
// })

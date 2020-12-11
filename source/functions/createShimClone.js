import createBasicProxy from './createBasicProxy'

function createShimClone(object) {
  return createBasicProxy({
    object,
    get: (object, store, prop) => {
      if (prop in store) {
        return Reflect.get(store, prop)
      } else if (prop in object) {
        return Reflect.get(object, prop)
      }
    },
    set: (object, store, prop, value) => {
      return Reflect.set(store, prop, value)
    }
  })
}

export default createShimClone

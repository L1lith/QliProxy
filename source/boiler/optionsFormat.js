import { ANY } from 'sandhands'

export default {
  _: {
    object: { _: ANY },
    write: { _: Boolean },
    read: { _: Boolean },
    construct: { _: Function },
    execute: { _: Function },
    get: { _: Function },
    set: { _: Function }
  },
  allOptional: true
}

## QliProxy
Designed to help you work with JS Proxy with ease.

#### Getting Started
1. To begin using QliProxy, make sure you have it installed

```bash
npm install qliproxy
```
2. Next, import the submodule QliProxy using the appropriate syntax for your environment

CommonJS:
```js
const {QliProxy} = require('qliproxy')

```
ES6:
```js
import {QliProxy} from 'qliproxy'
```
3. Begin using the proxy
```js
import {QliProxy} from 'qliproxy'

const myProxyObject = new QliProxy({
	get: ()=>12 // Our proxy will now return 12 for every property, no matter what the actual value is
})
```

To learn how to utilize your proxy object please see the section below
#### Proxy Options
| option    | description                                                  | input              |
| --        | --                                                           | --                 |
| get       | intercepts properties being accessed                         | callback function  |
| set       | intercepts properties being modified                         | callback function  |
| delete    | intercepts properties being deleted                          | callback function  |
| object    | allows you to provide a base object to initialize your proxy | object or function |
| getKeys   | intercepts and provides the keys when they're enumerated     | callback function  |
| readable  | allows you to enable/disable the reading of properties       | boolean            |
| writable  | allows you to enable/disable the modification of properties  | boolean            |
| has       | intercepts calls to hasOwnProperty and the in operator       | callback function  |
| construct | intercepts constructor calls (applicable to classes only)    | callback function  |
| execute   | intercepts function execution (applicable to functions only) | callback function  |

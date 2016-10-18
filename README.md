# cookie-proxy
Graceful cookie handler

## Usage

```javascript
import cookie from 'cookie-proxy'

cookie.foo = 'Awesome!'

console.log(document.cookie) // => "foo=Awesome!"
console.log(cookie.foo) // => "Awesome!"
```

## Install

```
$ npm i cookie-proxy
```

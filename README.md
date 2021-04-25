### bytes

This library can easily and quickly convert js string to bytes

### install

Install bytes using yarn:

```shell
yarn add @jimizai/bytes -S
```

Install bytes using npm

```shell
npm i @jimizai/bytes -S
```

### usage

```js
import { b } from "@jimizai/bytes";
const bytes = b`hello wolrd`;
// => Uint8Array(11) [
//   104, 101, 108, 108,
//   111,  32, 119, 111,
//   108, 114, 100
// ]
```

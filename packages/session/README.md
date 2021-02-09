# `@scale/session`

> scale Instance Session Manager

## Usage

```js
const { Session } = require('session');

const session = new Session({
  host: 'localhost:4000',
  gateway: 'auth'
})

session.init()

await session.login({ username, password })

session.add({
  host: 'localhost:4000',
  gateway: 'database'
})
```

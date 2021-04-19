# `@enjine/session`

> scale Instance Session Manager

## Usage

```js
// Nodejs
const { Session } = require('@enjine/session');

// Browser
import { Session } from '@enjine/session'

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

---
title: Common
description: ''
position: 11
category: 'guide'
---

If you want to use basic data management APIs, you can do so.

> Requires `@enjine/core` & `@enjine/database` & `@enjine/common`

## DataInstance

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host } from '@enjine/core'
  import { Manager } from '@enjine/database'
  import { DataInstance } from '@enjine/common'

  const name = 'anyName'

  const db = new Manager(name)

  const instance = new DataInstance(name, db)

  host.add(instance)
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host } = require('@enjine/core')
  const { Manager } = require('@enjine/database')
  const { DataInstance } = require('@enjine/common')

  const name = 'anyName'

  const db = new Manager(name)

  const instance = new DataInstance(name, db)

  host.add(instance)
  ```

  </code-block>
</code-group>

> For understanding whats going on under the hood, have a look at [Core Guide](/guide/core#instance)

The **DataInstance** is an extended ***Instance***, which wraps *DataGateway* and *DataController*.

## DataGateway

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host, Instance } from '@enjine/core'
  import { Manager } from '@enjine/database'
  import { DataGateway } from '@enjine/common'

  const name = 'anyName'

  const db = new Manager(name)

  const gateway = new DataGateway({ name, db })

  const instance = new Instance({
    gateway: [ gateway  ]
  })

  host.add(instance)
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host, Instance } = require('@enjine/core')
  const { Manager } = require('@enjine/database')
  const { DataGateway } = require('@enjine/common')

  const name = 'anyName'

  const db = new Manager(name)

  const gateway = new DataGateway({ name, db })

  const instance = new Instance({
    gateway: [ gateway  ]
  })

  host.add(instance)
  ```

  </code-block>
</code-group>

### Implemented Events

> Learn more about `Session ` and `Connections` here in [Session Guide](/guide/session)

```js
connection.emit('all', data => console.log(data))
connection.emit('get', 'any-key', data => console.log(data))
connection.emit('post', 'data = Strings, Obj, Array')
connection.emit('put', { _id: 'any-key', data: {} })
connection.emit('find', (obj) => obj._id === 'any-key' )
connection.emit('filter', (obj) => obj.created < Date )
connection.emit('remove', 'any-key')
```

## DataController

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host, Instance } from '@enjine/core'
  import { Manager } from '@enjine/database'
  import { DataController } from '@enjine/common'

  const name = 'anyName'

  const db = new Manager(name)

  const controller = new DataController({ name, db })

  const instance = new Instance({
    controller: [ controller  ]
  })

  host.add(instance)
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host } = require('@enjine/core')
  const { Manager } = require('@enjine/database')
  const { DataController } = require('@enjine/common')

  const name = 'anyName'

  const db = new Manager(name)

  const controller = new DataController({ name, db })

  const instance = new Instance({
    controller: [ controller  ]
  })

  host.add(instance)
  ```

  </code-block>
</code-group>

### Implemented Routes

```js
await connection.get('/')
await connection.get('/any-key')
await connection.post('/', 'data = Strings, Obj, Array')
await connection.put('/', { _id: 'any-key', data: {} })
await connection.get('/find', (obj) => obj._id === 'any-key' )
await connection.get('/filter', (obj) => obj.created < Date )
await connection.remove('/any-key')
```

## AuthInstance

> Coming soon

## AuthGateway

> Coming soon

## AuthController

> Coming soon

## MediaInstance

> Coming soon

## MediaGateway

> Coming soon

## MediaController

> Coming soon

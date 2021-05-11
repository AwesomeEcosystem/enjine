---
title: Core
description: ''
position: 9
category: 'guide'
---

**Core Module** defines the platform as a ***Host*** with *injected* ***Instances***

## Host

The **Host** is the platform for your services and behaves like a hole webserver or can be used for single [nodejs](https://nodejs.org/en/) processes. It has [express](https://expressjs.com/) under the hood. You can enable
`SSL`, `Proxy` and `Nuxt`

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host } from '@enjine/core'

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host } = require('@enjine/core')

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
</code-group>

## Instance

An **Instance** wraps ***Gateways*** and ***Controllers*** and inject them into the ***Host***. It has [socketio](https://socket.io/) and an adopted [router](http://expressjs.com/en/api.html#router) from the host under the hood. So it works as a Websocket and RESTful Container.  

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host, Instance } from '@enjine/core'

  const instance = new Instance()

  const host = new Host({ port: 6090 })

  host.add(instance)

  host.bootstrap()
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host, Instance } = require('@enjine/core')

  const instance = new Instance()

  const host = new Host({ port: 6090 })

  host.add(instance)

  host.bootstrap()
  ```

  </code-block>
</code-group>

So you have an empty but running Instance injected into the host yet.

## Gateway

The **Gateway** is a [socketio namespace](https://socket.io/docs/v4/server-api/#Namespace) with its injectable endpoints.

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host, Instance, Gateway } from '@enjine/core'

  // Websocket will be available on ws://localhost:6090/anyName
  const gateway = new Gateway('anyName', ({ socket, namespace }) => {
    namespace.on('anyEvent', (data) => {
      console.log(data);
      socket.emit('anyResponse')
    })
  })

  const instance = new Instance({
    gateway: [ gateway ]
  })

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host, Instance, Gateway } = require('@enjine/core')

  // Websocket will be available on ws://localhost:6090/anyName
  const gateway = new Gateway('anyName', ({ socket, namespace }) => {
    namespace.on('anyEvent', (data) => {
      console.log(data);
      socket.emit('anyResponse')
    })
  })

  const instance = new Instance({
    gateway: [ gateway ]
  })

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
</code-group>

## Controller

The **Controller** is an [express router](http://expressjs.com/en/api.html#router) with its injectable endpoints.

<code-group>
  <code-block label="es6" active>

  ```js
  import { Host, Instance, Controller } from '@enjine/core'

  // API will be available on http://localhost:6090/anyName/anyRoute
  const controller = new Controller('anyName', ({ router }) => {
    router.get('anyRoute', (req, res) => {
      res.send('Any Response')
    })
  })

  const instance = new Instance({
    controller: [ controller ]
  })

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Host, Instance, Controller } = require('@enjine/core')

  // API will be available on http://localhost:6090/anyName/anyRoute
  const controller = new Controller('anyName', ({ router }) => {
    router.get('anyRoute', (req, res) => {
      res.send('Any Response')
    })
  })

  const instance = new Instance({
    controller: [ controller ]
  })

  const host = new Host({ port: 6090 })

  host.bootstrap()
  ```

  </code-block>
</code-group>

The Controller *name* is the `route`.

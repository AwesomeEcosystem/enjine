---
title: Session
description: ''
position: 12
category: 'client'
---
> Attention: The Session SDK is for the Connection between your enjine Node and enjine Client. If you are interested in Web 3 take a look [here](https://authic.ecosis.io) 

One **Session** holds one ticket for its ***Connections*** to **enjine** ***nodes***

> You can add gateway or controller connections or both at once if available on instance

<code-group>
  <code-block label="es6" active>

  ```js
  import { Session } from '@enjine/session'

  const session = new Session({
    host: 'ws://localhost:6090',
    gateway: 'auth',
    controller: 'auth'
  })

  // Checking Cookies if needed (optional)
  session.init()

  // Authentificate if needed
  await session.login({ username: 'yourUser', password: 'yourPassword')

  // Add gateway or controller or both into session
  session.add({
    // host: 'ws://localhost:6090' // optional if different host for same ticket
    gateway: 'anyName', // Namespace
    controller: 'anyName' // Route
  })

  // Use added Gateway
  session.gateway.anyName.on('anyEvent', data => console.log(data))
  session.gateway.anyName.emit('anyEvent', { data: 'any Data' })

  // Use added Controller
  const data = await session.controller.anyName.get('/anyRoute')
  await session.controller.anyName.post('/anyRoute', {})
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Session } = require('@enjine/session')

  const session = new Session({
    host: 'ws://localhost:6090',
    gateway: 'auth',
    controller: 'auth'
  })

  // Checking Cookies if needed (optional)
  session.init()

  // Authentificate if needed
  await session.login({ username: 'yourUser', password: 'yourPassword' })

  // Add gateway or controller or both into session
  session.add({
    // host: 'ws://localhost:6090' // optional if different host for same ticket
    gateway: 'anyName', // Namespace
    controller: 'anyName' // Route
  })

  // Use added Gateway
  session.gateway.anyName.on('anyEvent', data => console.log(data))
  session.gateway.anyName.emit('anyEvent', { data: 'any Data' })

  // Use added Controller
  const data = await session.controller.anyName.get('/anyRoute')
  await session.controller.anyName.post('/anyRoute', {})
  ```

  </code-block>
</code-group>

If you want to have Tickets and Connections more under your control, you can use **Auth** for getting *Tickets* and **Connection** to connect with ***Gateways*** and ***Controllers***.

<code-group>
  <code-block label="es6" active>

  ```js
  import { Auth, Connection } from '@enjine/session'

  const auth = new Auth({
    host: 'ws://localhost:6090',
    gateway: 'auth',
    controller: 'auth'
  })

  const ticket = await auth.login({ username: 'yourUser', password: 'yourPassword' })

  const connection = new Connection({
    ticket,
    host: 'ws://localhost:6090',
    gateway: 'anyName',
    controller: 'anyName'
  })

  // Gateway Usage
  connection.on('anyEvent', data => console.log(data))
  connection.emit('anyEvent', { data: 'any Data' })

  // Controller Usage
  const data = await connection.get('/')
  await connection.post('/anyRoute', {})
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Auth, Connection } = require('@enjine/session')

  const auth = new Auth({
    host: 'ws://localhost:6090',
    gateway: 'auth',
    controller: 'auth'
  })

  const ticket = await auth.login({ username: 'yourUser', password: 'yourPassword' })

  const connection = new Connection({
    ticket,
    host: 'ws://localhost:6090',
    gateway: 'anyName',
    controller: 'anyName'
  })

  // Gateway Usage
  connection.on('anyEvent', data => console.log(data))
  connection.emit('anyEvent', { data: 'any Data' })

  // Controller Usage
  const data = await connection.get('/')
  await connection.post('/anyRoute', {})
  ```

  </code-block>
</code-group>

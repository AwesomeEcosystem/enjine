# enjine

> Progressive Interoperable Full Stack Application Data Management Framework

**enjine** bundles everything you need to build interoperable apps out of the box!

The ***ultimate*** extension for re-usability, scalability and interoperability.  

> Lets build a digital global data flow infrastructure for an open, transparent and efficient future!

Its good for beginners, because of the easy to use bundled standards - all necessary tools at once! And its good for advanced, because it safes much time!

# Documentation

Read the Dos [here](https://docs.ecosis,io)

## Node Modules

- [Core]()
- [Common]()
- [Session]()
- [Components]()
- [Database]()
- [Utils]()

## Boilerplates

###  Single Page Application

- [Minimal]()
- [Basic]()
- [Advanced]()

### Fullstack

- [Minimal]()
- [Basic]()
- [Advanced]()

# Concept

- **Network** `Ecosystem between Instances and Components`

- **Instances** `Node Instances as Backend with Gateway and Controller APIs for Data Interaction`
  - **Gateway** `Realtime Websocket APIs`
  - **Controller** `RESTful APIs`

- **Components** `Ready to use Application UI Components`
  - **Session** `Ticket Container for multiple Connections`
  - **Connection** `Gateway & Controller APIs`

Like Lego - you only need to combine your ***Components*** and ***Instances*** the right way you need. Because of the *interoperability APIs* its possible to share and operate data in ***Networks***

> Extended NuxtJS shipped with a real time Data Management System including ready to use VueJS Components.


# Usage

## Core Functionality

Design your Data Instances and embed them into your host.

```js
// Server
import { Host, Instance, Controller, Gateway } from '@enjine/core'

const controller = new Controller('/api', ({ router }) => {
  router.get('/', (req, res) => {
    res.send('Hi')
  })
})

const instance = new Instance({
  controller: [ controller ]
})

const host = new Host({ port: 4000 })

host.add(instance)

host.bootstrap()

```

```js
// Client

const { Session } = require('session');

const session = new Session()

session.add({
  host: 'localhost:4000',
  controller: 'api'
})

session.api.get('/')
```

# Proof of Concept

```shell
npm i

npm run test

npm run dev
```

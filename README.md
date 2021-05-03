# enjine

> Progressive Interoperable Full Stack Application Data Management Framework

**enjine** bundles everything you need to build ecosis ready apps out of the box!

The ***ultimate*** NuxtJS extension for re-usability, scalability and interoperability.  

> Lets build a digital global data flow infrastructure for an open, transparent and efficient future!

Its good for beginners, because of the easy to use bundled standards - all nessecary tools at once! And its good for advanced, because it safes much time!


# Concept


> Lets build Data Cities with links which are like streets :)

Parts of a full *data management backend* with implemented *authentication* are designed into classes for scalable architecture, which safes much time!

# Usage

```js
// Server
import { Host, Instance, Controller, Gateway } from '@enjine/core'

const controller = new Controller('/', ({ router }) => {
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


# Why still Alpha Version?

The Framework is as secure as modern standards are, so I would use it ready for the production. But the concept of the vision is to have this library more dynamic and shipped with more features, which makes this so functional.

# Vision

***Decentralization*** means *security*, *stability* and *scalability*. The concept of the tweak- and extendable ***dynamic*** **Instance**

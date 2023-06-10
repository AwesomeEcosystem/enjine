# `@enjine/core`
> v0.0.1

Core Modules to build *scale Instances*

## Usage

```js
import { Host, Instance, Gateway, Controller } from '@enjine/core'

const gateway = new Gateway('anyName', ({ socket, namespace }) => {
  namespace.on('anyEvent', (data) => {

    console.log(data)
    socket.emit('anyResponse')
  })
})

// API will be available on http://localhost:6090/anyName/anyRoute
const controller = new Controller('anyName', ({ router }) => {
  router.get('anyRoute', (req, res) => {

    console.log(req);
    res.send('Any Response')
  })
})


const instance = new Instance({
  gateway: [ gateway ],
  controller: [ controller ]
})

const host = new Host({
  port: 6090,
  host: 'localhost'
})

host.add(instance)

host.bootstrap()
```

> Still Alpha, more soon!

# scale

> Progressive Interoperable Full Stack Application Data Management Framework

> Lets build a digital global data flow infrastructure for an open, transparent and efficient future!

**scale** is a real time data management framework.

# Concept

> Lets build Data Cities with links which are like streets :)

Parts of a full *data management backend* with implemented *authentication* are designed into classes for scalable architecture, which safes much time!

# Usage

```js
// Server
const { Host, Instance, Gateway, authMiddleware, User } = require('@ecosis/core');
const { AuthGateway, UserGateway, DataGateway, MediaGateway } = require('@ecosis/common');
const { Manager } = require('@ecosis/database');


const database = new Manager('.database'),

      datadb = database.create('data'),
      userdb = database.create('user'),
      mediadb = database.create('media'),

      auth = new AuthGateway('auth', database),
      data = new DataGateway('data', datadb), // XXX /([^\s]+)/

      user = new UserGateway('user', userdb),
      media = new MediaGateway('media', mediadb),

      host = new Host({
        cors: { origin: '*', credentials: false },
        transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
      });


data.use(authMiddleware);

user.use(authMiddleware);
media.use(authMiddleware);


host.add([
  new Instance('', [
    auth,
    user,
    data,
    media
  ])
]);

host.listen(4000);
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

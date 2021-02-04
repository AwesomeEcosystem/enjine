# scale

> Progressive Interoperable Full Stack Application Data Management Framework

> Lets build a digital global data flow infrastructure for an open, transparent and efficient future!

**scale** is a real time data management framework.

# Concept

> Lets build Data Cities with links which are like streets :)

Parts of a full *data management backend* with implemented *authentication* are designed into classes for scalable architecture, which safes much time!

```js

class Core {
  constructor(name, fn) {

  }
}

new Core('core', () => {

})

```

```js

host.add([
  new Instance('social', ({ manager }) => {

    const users = manager.create('users')
    const posts = users.create('posts')
    const comments = posts.create('comments')

    return [

      new Gateway('users', [

        new Endpoint('find', async (id: any, data: any) => {
          return await users.find(data)
        })

      ]),

      new Gateway('posts', [

        new Endpoint('post', async (id: any, data: any) => {
          return await posts.post(data)
        })

        new Endpoint('comment', async (id: any, data: any) => {
          const post  =await posts.get(data.id)
        })

      ])

    ]
  })
])

```


# Usage


If oyu want to use an dynamic Gateway simple do

```js
new DataGateway(/([^\s]+)/, database)
```

# Why still Alpha Version?

The Framework is as secure as modern standards are, so I would use it ready for the production. But the concept of the vision is to have this library more dynamic and shipped with more features, which makes this so functional.

# Vision

***Decentralization*** means *security*, *stability* and *scalability*. The concept of the tweak- and extendable ***dynamic*** **Instance**

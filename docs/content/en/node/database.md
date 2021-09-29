---
title: Database
description: ''
position: 11
category: 'node'
---

> Serverside Database

## Simple

If you only want to use a simple Database:

<code-group>
  <code-block label="es6" active>

  ```js
  import { Database } from '@enjine/database'

  // The declared name of a database is the relative path  
  const name = 'any-db-name'

  const db = new Database(name)

  await db.post({
    _id: 'any-Key',
    data: {}
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Database } = require('@enjine/database')

  // The declared name of a database is the relative path  
  const name = 'any-db-name'

  const db = new Database(name)

  await db.post({
    _id: 'any-Key',
    data: {}
  })
  ```

  </code-block>
</code-group>


## Manager

If you want to have multiple Databases, you can use a Database-Manager. Its an extended `Database`, so you can use it the same way as above, but additionally you can create sub-databases:

<code-group>
  <code-block label="es6" active>

  ```js
  import { Manager } from '@enjine/database'

  const name = 'any-db-name'

  const db = new Manager(name)

  const posts = db.create('posts')

  const comments = posts.create('comments')

  await posts.post({
    _id: 'post-key',
    data: {}
  })

  await comments.post({
    _id: 'comment-Key',
    data: {
      post_id: 'post-key',
      data: {}
    }
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Manager } = require('@enjine/database')

  const name = 'any-db-name'

  const db = new Manager(name)

  const posts = db.create('posts')

  const comments = posts.create('comments')

  await posts.post({
    _id: 'post-key',
    data: {}
  })

  await comments.post({
    _id: 'comment-Key',
    data: {
      post_id: 'post-key',
      data: {}
    }
  })
  ```

  </code-block>
</code-group>


## Document Model

Because a database entry needs a individual key, you can use a Document Model, which helps you out:

<code-group>
  <code-block label="es6" active>

  ```js
  import { Data, Database } from '@enjine/database'

  const name = 'any-db-name'

  const db = new Database(name)

  const data = new Data('Any Data you like - Also JSON Objects')

  await db.post(data)
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { Data, Database } = require('@enjine/database')

  const name = 'any-db-name'

  const db = new Database(name)

  const data = new Data('Any Data you like - Also JSON Objects')

  await db.post(data)
  ```

  </code-block>
</code-group>

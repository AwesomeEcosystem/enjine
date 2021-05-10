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

> For understanding whats going on under the hood, have a look at [Core Guide](/guide/core)

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

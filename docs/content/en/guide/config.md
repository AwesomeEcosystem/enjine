---
title: Configuration
description: ''
position: 3
category: 'guide'
---

## App Template

An **App Template** setups basic configurations for you.

### Nuxt Config

If you want to use a configuration template for your *nuxt* application with additional enjine paramters, you can use `@enjine/common`.

<code-group>
  <code-block label="es6" active>

  ```js[nuxt.config.js]
  import { App } from '@enjine/common'

  const options = {} // not required

  export default new App(options)
  ```

  </code-block>
  <code-block label="commonjs">

  ```js[nuxt.config.js]
  const { App } = require('@enjine/common')

  const options = {} // not required

  module.exports = new App(options)
  ```

  </code-block>
</code-group>

For *Option Parameters* have a look [here at Options](#options)

### Host Injection

<code-group>
  <code-block label="es6" active>

  ```js[enjine.js]
  import { Host } from '@enjine/core'
  import { App } from '@enjine/common'

  const options = {} // not required

  const app = new App(options)

  const host = new Host({
    nuxt: app
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js[enjine.js]
  const { Host } = require('@enjine/core')
  const { App } = require('@enjine/common')

  const options = {} // not required

  const app = new App(options)

  const host = new Host({
    nuxt: app
  })
  ```

  </code-block>
</code-group>

> You dont need to use an App Template. Plain Nuxt Config works too. Or just leave these config empty. If you set the host parameter `nuxt = true`, a clean Nuxt will launch.

### Options

These options are an extended *nuxt* config. So you can access to all other [config paramters by nuxt](https://nuxtjs.org/docs/2.x/features/configuration)

> Keep in mind the modules you want to inject need to be installed and mentioned as below (No import needed)

<code-group>
  <code-block label="es6" active>

  ```js
  import { App } from '@enjine/common'

  const options = {} // not required

  const app = new App({
    theme: '@enjine/themes/basic',
    components: [ '@enjine/components' ],
    // .. optional nuxt configuration
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { App } = require('@enjine/common')

  const app = new App({
    theme: '@enjine/themes/basic',
    components: [ '@enjine/components' ],
    // .. optional nuxt configuration
  })
  ```

  </code-block>
</code-group>

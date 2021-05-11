---
title: Configuration
description: ''
position: 3
category: Setup
---


If you want to use a configuration template for your *nuxt* with additional enjine  paramters, you can use `@enjine/common`.

<code-group>
  <code-block label="es6" active>

  ```js[nuxt.config.js]
  import { App } from '@enjine/common'

  export default new App()
  ```

  </code-block>
  <code-block label="commonjs">

  ```js[nuxt.config.js]
  const { App } = require('@enjine/common')

  module.exports = new App()
  ```

  </code-block>
</code-group>

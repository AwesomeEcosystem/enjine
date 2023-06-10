---
title: Template
description: ''
position: 14
category: 'client'
---

> Requires `@enjine/nuxt`

Launch a Nuxt Application with configured  Theme including Vue Components

<code-group>
  <code-block label="es6" active>

  ```js
  import { docs } from '@enjine/templates'

  export default docs({
    theme: '@enjine/themes/basic'
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { docs } = require('@enjine/template')

  module.exports = docs({
    theme: '@enjine/themes/basic'
  })
  ```

  </code-block>
</code-group>

If you use basic or extended **enjine Components** and ***Tailwindcss APIs***, the style will be automatically adopted.

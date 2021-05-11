---
title: Themes
description: ''
position: 14
category: 'guide'
---

> Requires `@enjine/common` & `@enjine/themes`

<code-group>
  <code-block label="es6" active>

  ```js
  import { App } from '@enjine/common'

  export default new App({
    theme: '@enjine/themes/basic'
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { App } = require('@enjine/common')

  module.exports = new App({
    theme: '@enjine/themes/basic'
  })
  ```

  </code-block>
</code-group>

If you use basic or extended **enjine Components** and ***Tailwindcss APIs***, the style will be automatically adopted.

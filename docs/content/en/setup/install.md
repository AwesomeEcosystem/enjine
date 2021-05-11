---
title: Installation
description: ''
position: 2
category: Setup
---

> Requires latest `node` & `npm` or `yarn`

## Cli

> Coming soon

## Modules

### Core

For developing a node with its core functionalities simply add `@enjine/core` to your dependencies:

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/core
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/core
  ```

  </code-block>
</code-group>

[Learn more about the Usage here](/guide/core)


### Common

If you need ready to use modules, you can install common ones:

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/common
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/common
  ```

  </code-block>
</code-group>

[Learn more about the Usage here](/guide/common)

### Components

> Requires Vue 2 - Vue 3 Compatibility coming soon

There are basic **Components** already available to design your gui:

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/components
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/components
  ```

  </code-block>
</code-group>

Now you can import those into Vuejs or Nuxt

<code-group>
  <code-block label="Nuxt" active>


  ```js
  // plugins/enjine.js

  import Vue from 'vue'
  import Components from '@enjine/components'

  Vue.use(Components)

  // nuxt.config
  // ..
  plugins: [ '~/plugins/enjine' ]
  // ..

  ```
  </code-block>
  <code-block label="Vue">

  ```js
  // src/main.js

  import Vue from 'vue'
  import Components from '@enjine/components'

  Vue.use(Components)
  ```

  </code-block>
</code-group>

Of course you can import single components

<code-block label="vue" active>

```js
import Vue from 'vue'
import { App, Layout, Container, Card } from '@enjine/components'

Vue.component(App)
Vue.component(Layout)
Vue.component(Container)
Vue.component(Card)

// You can find more Components in the Guide
```

</code-block>

If you use the `App Config Template` by `@enjine/common`:

<code-group>
  <code-block label="es6" active>

  ```js
  import { App } from '@enjine/common'

  export default new App({
    components: '@enjine/components'
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { App } = require('@enjine/common')

  module.exports = new App({
    components: '@enjine/components'
  })
  ```

  </code-block>
</code-group>

[Learn more about the Components Usage here](/guide/components)

### Themes

Because of *Tailwindcss*, its possible ti adopt themes. **enjine** has some ready for you.

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/themes
  ```

  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/themes
  ```

  </code-block>
</code-group>

[Learn more about the Usage here](/guide/themes)

---
title: Installation
description: ''
position: 2
category: Setup
---

> Requires latest `node` & `npm` or `yarn`

## Cli

> Extended Functionalities Coming soon

[Learn more here in the Guide Section](/guide/start)

## Node

### Core
> Serverside

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
> Serverside

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

### Database
> Serverside

The integrable document based database with no need to install external ones

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/database
  ```
  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/database
  ```
  </code-block>
</code-group>

[Learn more about the Usage here](/guide/database)

## Client

### Session
> Serverside & Clientside

The Session lets you connect with ***Instances*** and its ***Gateways*** and ***Controllers***.

<code-group>
  <code-block label="npm" active>

  ```bash
  npm install @enjine/session
  ```
  </code-block>
  <code-block label="Yarn">

  ```bash
  yarn add @enjine/session
  ```
  </code-block>
</code-group>

[Learn more about the Usage here](/guide/session)

### Components
> Clientside

There are basic **Components** already available to design your gui.

> Vuejs and Tailwindcss under the hood

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

If you use the `App Config Template` by `@enjine/common`

<code-group>
  <code-block label="es6" active>

  ```js
  import { App } from '@enjine/common'

  export default new App({
    components: [ '@enjine/components' ]
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { App } = require('@enjine/common')

  module.exports = new App({
    components: [ '@enjine/components' ]
  })
  ```

  </code-block>
</code-group>

- [Learn more about the Configuration here](/setup/config)

Or you can import those into Vuejs or Nuxt by your own

> Requires Vue 2 or Nuxt 2 - Vue 3 Compatibility coming soon


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

- [Learn more about the Components Usage here](/guide/components)

### Themes
> Clientside

Because of *Tailwindcss*, its possible to adopt themes. **enjine** has some ready for you.

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

If you use the `App Config Template` by `@enjine/template`:

<code-group>
  <code-block label="es6" active>

  ```js
  import { base } from '@enjine/common'

  export default base({
    theme: '@enjine/theme/basic'
  })
  ```

  </code-block>
  <code-block label="commonjs">

  ```js
  const { base } = require('@enjine/common')

  module.exports = base({
    theme: '@enjine/theme/basic'
  })
  ```

  </code-block>
</code-group>

- [Learn more about the Configuration here](/setup/config)

Or you import the theme into Vuejs or Nuxt by your own

> Requires `Vue` or `Nuxt `and latest `Tailwindcss`

<code-group>
  <code-block label="Nuxt" active>


  ```js[nuxt.config.js]
  // ..
  css: [ '@enjine/themes/basic' ],
  // ..

  ```
  </code-block>
  <code-block label="Vue">

  ```js[src/main.js]
  import Vue from 'vue'
  import '@enjine/themes/basic'
  ```

  </code-block>
</code-group>

[Learn more about the Usage here](/guide/themes)

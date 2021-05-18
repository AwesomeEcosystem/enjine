---
title: Host
description: ''
position: 4
category: concept
---

The **Host** maintains your ***Instances***
> [More about Instances here](/concept/instance)

## Under the Hood

```js
class Host {
  config,
  app: express,
  server: {
    http,
    https
  },
  instances: [],
  middleware: []
}
```

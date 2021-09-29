---
title: Host
description: ''
position: 4
category: interfaces
---

The **Host** maintains your ***Instances***
> [More about Instances here](/concept/instance)

## Under the Hood

```ts
interface Host {
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

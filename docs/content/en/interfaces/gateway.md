---
title: Gateway
description: ''
position: 6
category: interfaces
---

The **Gateway** enables Websocket for your ***Instances***

## Under the Hood

```ts
interface Gateway {
  database,
  middleware,
  endpoints,
  namespace: socketio.Namespace
}
```

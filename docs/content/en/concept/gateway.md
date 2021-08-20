---
title: Gateway
description: ''
position: 6
category: concept
---

The **Gateway** enables Websocket for your ***Instances***

## Under the Hood

```js
class Gateway {
  database,
  middleware,
  endpoints,
  namespace: socketio.Namespace
}
```

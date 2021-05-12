---
title: Session
description: ''
position: 8
category: concept
---

The **Session** is the manager for your ***Ticket*** and its **Connections** to *Instance* ***Gateways*** and ***Controllers***.

## Under the Hood

```js
class Session {
  ticket,
  config,
  connection: {
    gateway,
    controller
  }
}
```

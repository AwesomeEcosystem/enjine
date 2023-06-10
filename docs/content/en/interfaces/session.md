---
title: Session
description: ''
position: 8
category: interfaces
---

The **Session** is the manager for your ***Ticket*** and its **Connections** to *Instance* ***Gateways*** and ***Controllers***.

## Under the Hood

```ts
interface Session {
  ticket,
  config,
  connection: {
    gateway,
    controller
  }
}
```

# `@ecosis/core`

> Core Modules to build *scale Instances*

## Usage

```js
const { Host, Instance, Gateway } = require('@ecosis/core');
const { Database } = require('@ecosis/database');

const db = new Database('.db')

host.add([
  new Instance('', [
    new Gateway('name', db, (context) => console.log(context))
  ])
]);

host.listen(9090);
```

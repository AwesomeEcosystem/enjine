# `@enjine/database`

> Easy to use Level Database Manager for NodeJS.

## Usage

### Database Manager

```js
const { Manager } = require('@enjine/database');

const manager = new Manager('.db')

const database = manager.create('database')

await database.post('key', 'Some Data, can be Objetcs, Numbers, String, Arrays')

const data = await database.get('key')

const allData = await database.fetch()

await database.remove('key')
```

### Single Database

```js
const { Database } = require('@enjine/database');

const database = new Database('.db')

await database.post('key', 'Some Data, can be Objetcs, Numbers, String, Arrays')

const data = await database.get('key')

const allData = await database.fetch()

await database.remove('key')
```

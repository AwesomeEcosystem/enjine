import { Host, Gateway, Endpoint } from '@scale/core';

const host = new Host({})

host.add([
  new Gateway('dev', [
    new Endpoint('check', (id: any, data: any) => {
      console.log(id, data);
    })
  ])
])

host.listen()

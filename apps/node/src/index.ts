import { Host, Instance, Gateway, Endpoint } from '@scale/core';

const host = new Host({
  cors: { origin: '*', credentials: false },
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
})

host.add([
  new Instance('dev', [
    new Gateway('playground', [
      new Endpoint('check', (id: any, data: any) => {
        console.log(id, data);
      })
    ])
  ])
])

host.listen()

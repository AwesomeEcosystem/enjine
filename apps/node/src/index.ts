import { Host, Instance, Gateway, authMiddleware } from '@scale/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@scale/common';

const host = new Host({
  cors: { origin: '*', credentials: false },
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
})

host.add([
  new Instance('', [
    new AuthGateway(), 
    new UserGateway(), 
    new DataGateway(), 
    new MediaGateway()
  ])
])

host.listen(9090)

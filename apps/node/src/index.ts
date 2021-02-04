import { Host, Instance, Gateway, authMiddleware, User } from '@scale/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@scale/common';
import { Manager } from '@scale/database';


const database = new Manager('.database'),

      datadb = database.create('data'),
      userdb = database.create('user'),
      mediadb = database.create('media'),

      auth = new AuthGateway('auth', database),
      data = new DataGateway('data', datadb),

      user = new UserGateway('user', userdb),
      media = new MediaGateway('media', mediadb),

      host = new Host({
        cors: { origin: '*', credentials: false },
        transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
      });


data.use(authMiddleware);

user.use(authMiddleware);
media.use(authMiddleware);


host.add([
  new Instance('', [
    auth,
    user,
    data,
    media
  ])
]);

host.listen(9090);

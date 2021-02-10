import { Host, Instance, Gateway, authMiddleware, User } from '@ecosis/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@ecosis/common';
import { Manager } from '@ecosis/database';


const database = new Manager('.database'),

      datadb = database.create('data'),
      userdb = database.create('user'),
      mediadb = database.create('media'),

      auth = new AuthGateway('auth', database),
      data = new DataGateway('data', datadb), // XXX /([^\s]+)/

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

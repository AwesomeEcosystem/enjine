import { Host, Instance, Gateway, authMiddleware, User } from '@scale/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@scale/common';
import { Manager } from '@scale/database';


const database = new Manager('.database'),

      datas = database.create('data'),
      users = database.create('user'),
      medias = database.create('media'),

      auth = new AuthGateway(database),
      data = new DataGateway(datas),

      user = new UserGateway(users),
      media = new MediaGateway(medias),

      host = new Host({
        cors: { origin: '*', credentials: false },
        transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
      });


// data.use(authMiddleware);
//
// user.use(authMiddleware);
// media.use(authMiddleware);


host.add([
  new Instance('', [
    auth,
    user,
    data,
    media
  ])
]);

host.listen(9090);

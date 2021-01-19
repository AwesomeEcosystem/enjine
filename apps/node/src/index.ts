import { Host, Instance, Gateway, authMiddleware, User } from '@scale/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@scale/common';
import { Manager } from '@scale/database';



const users = new Manager('./.database/users');

const bootstrap = async () => {
  let user: any = await users.find(u => u.username === 'admin')
  if (!user) {
    const admin: any = new User('admin')
    await admin.init('admin')
    await users.post(admin)
    user = admin
  }
  console.log(user);


  const host = new Host({
    cors: { origin: '*', credentials: false },
    transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
  });


  const auth = new AuthGateway()
  const user = new UserGateway()
  const data = new DataGateway()
  const media = new MediaGateway()


  user.use(authMiddleware),
  data.use(authMiddleware),
  media.use(authMiddleware)


  host.add([
    new Instance('', [
      auth,
      user,
      data,
      media
    ])
  ]);

  host.listen(9090);
};

bootstrap()

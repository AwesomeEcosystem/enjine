import { Host, Instance, Gateway, authMiddleware, User } from '@scale/core';
import { AuthGateway, UserGateway, DataGateway, MediaGateway } from '@scale/common';
import { Manager } from '@scale/database';


const database = new Manager('.database')

const users = database.create('user')
const datas = database.create('data')
const medias = database.create('media')


const auth = new AuthGateway(database)
const user = new UserGateway(users)
const data = new DataGateway(datas)
const media = new MediaGateway(medias)

user.use(authMiddleware),
data.use(authMiddleware),
media.use(authMiddleware)


const host = new Host({
  cors: { origin: '*', credentials: false },
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
});

host.add([
  new Instance('', [
    auth,
    user,
    data,
    media
  ])
]);

host.listen(9090);



const bootstrap = async () => {
  let user: any = await users.find(u => u.username === 'admin')
  if (!user) {
    const admin: any = new User('admin')
    await admin.init('admin')
    await users.post(admin)
    user = admin
  }
  console.log(user)
};

bootstrap()

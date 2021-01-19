import { Manager } from '@scale/database';

const manager = new Manager('.database')
const media = manager.create('media')

export async function endpoints(socket: any) {

  socket.on('upload', async (data: any, callback: any) => {
    console.log(socket.id);
    callback(null, data)
  })

  socket.on('stream', async (data: any, callback: any) => {
    callback(null, data)
  })
}

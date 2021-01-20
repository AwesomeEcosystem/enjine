import { Manager } from '@scale/database';

export async function endpoints(context: any) {

  const { socket, database } = context;

  socket.on('upload', async (data: any, callback: any) => {
    console.log(socket.id);
    callback(null, data)
  })

  socket.on('stream', async (data: any, callback: any) => {
    callback(null, data)
  })
}

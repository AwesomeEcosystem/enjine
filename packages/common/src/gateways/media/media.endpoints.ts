import { Manager } from '@scale/database';

const manager = new Manager('.database')
const media = manager.create('media')

export async function upload(socket: any, data: any, callback: any) { // TODO Credentials Interface
  console.log(socket.id);
  callback(null, data)
}

export async function stream(socket: any, data: any, callback: any) { // TODO Credentials Interface
  callback(null, data)
}

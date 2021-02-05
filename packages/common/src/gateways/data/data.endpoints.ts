import { Manager, Model } from '@scale/database';
import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { socket, space, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('post', async (data: any) => {
    const doc: any = new Document('data', socket.handshake.auth.ticket.user, data) // TODO Dyn Author
    try {
      await database.post(doc)
      space.emit('post', doc)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('update', async (doc: any) => {
    try {
      await database.put(doc._id, doc)  // TODO updated Author
      space.emit('update', doc)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res: any = await database.get(id)
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res: any = await database.find(fn)
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res: any = await database.filter(fn)
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });

  socket.on('remove', async (id: string) => {
    try {
      await database.remove(id)
      space.emit('remove', id)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  });
}

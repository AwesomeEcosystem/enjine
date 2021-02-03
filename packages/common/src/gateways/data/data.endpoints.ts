import { Manager, Model } from '@scale/database';
import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { socket, space, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()

      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('post', async (data: any, callback: any) => {
    const doc: any = new Document('data', 'admin', data) // TODO Dyn Author
    try {
      const res: any = await database.post(doc)

      space.emit('post', doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('update', async (doc: any, callback: any) => {
    try {
      const res = await database.put(doc._id, doc)

      space.emit('update', doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res: any = await database.get(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res: any = await database.find(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res: any = await database.filter(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res: any = await database.remove(id)

      space.emit('remove', id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  });
}

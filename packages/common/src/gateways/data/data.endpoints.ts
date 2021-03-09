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
    const doc: any = new Document('data', socket.handshake.auth.ticket.user, data) // TODO Dyn Author
    try {
      await database.post(doc)
      callback(null, res)
      space.emit('post', doc)
    } catch (err) {
      callback(new Error(err), null)
    }
  });

  socket.on('update', async (doc: any, callback: any) => {
    try {
      await database.put(doc._id, doc)  // TODO updated Author
      callback(null, res)
      space.emit('update', doc)
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
      await database.remove(id)
      callback(null, res)
      space.emit('remove', id)
    } catch (err) {
      callback(new Error(err), null)
    }
  });
}

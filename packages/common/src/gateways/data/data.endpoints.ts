import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { socket, namespace, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      callback(res)
    } catch (err) {
      namespace.emit('error', new Error(err))
    }
  });

  socket.on('post', async (data: any) => {
    const doc: any = new Document('data', socket.handshake.auth.ticket.user || 'undefined', data) // TODO Dyn Author
    try {
      const res: any = await database.post(doc)
      namespace.emit('post', doc)
    } catch (err) {
      namespace.emit('error', new Error(err))
    }
  });

  socket.on('update', async (doc: any) => {
    try {
      const res: any = await database.put(doc._id, doc)  // TODO updated Author
      namespace.emit('update', doc)
    } catch (err) {
      socket.emit('error', new Error(err))
    }
  });

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res: any = await database.get(id)
      callback(res)
    } catch (err) {
      socket.emit('error', new Error(err))
    }
  });

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res: any = await database.find(fn)
      callback(res)
    } catch (err) {
      socket.emit('error', new Error(err))
    }
  });

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res: any = await database.filter(fn)
      callback(res)
    } catch (err) {
      socket.emit('error', new Error(err))
    }
  });

  socket.on('remove', async (id: string) => {
    try {
      const res: any = await database.remove(id)
      namespace.emit('remove', id)
    } catch (err) {
      socket.emit('error', new Error(err))
    }
  });
}

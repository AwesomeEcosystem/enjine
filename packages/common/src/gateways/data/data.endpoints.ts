import { Manager, Model } from '@scale/database';
import { Document } from '../../models/document.model';

export async function endpoints(context: any) {

  const { socket, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res = await database.all()
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('post', async (data: any, callback: any) => {
    const doc = new Document('data', 'admin', data)
    try {
      const res = await database.post(doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (doc: any, callback: any) => {
    try {
      const res = await database.put(doc._id, doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res = await database.get(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res = await database.find(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res = await database.filter(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res = await database.remove(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })
}

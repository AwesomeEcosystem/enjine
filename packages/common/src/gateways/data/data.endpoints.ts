import { Manager, Model } from '@scale/database';

const manager = new Manager('.database')
const docs = manager.create('data')

export async function endpoints(socket: any) {

  socket.on('post', async (data: any, callback: any) => {
    const doc = new Model(data)
    try {
      const res = await docs.post(doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (doc: any, callback: any) => {
    try {
      const res = await docs.put(doc._id, doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res = await docs.get(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res = await docs.find(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res = await docs.filter(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res = await docs.remove(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })
}

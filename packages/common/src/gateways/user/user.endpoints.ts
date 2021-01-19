import { Manager } from '@scale/database';
import { User } from '@scale/core';

const manager = new Manager('.database')
const users = manager.create('users')

export async function endpoints(socket: any) {

  socket.on('post', async (data: any, callback: any) => {
    const user = new User(data)
    try {
      const res = await users.post(user)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (doc: any, callback: any) => {
    try {
      const res = await users.put(doc._id, doc)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const res = await users.get(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const res = await users.find(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const res = await users.filter(fn)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res = await users.remove(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })
}

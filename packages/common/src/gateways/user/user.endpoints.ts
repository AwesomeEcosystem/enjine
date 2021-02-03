import { Manager } from '@scale/database';
import { User } from '@scale/core';

export async function endpoints(context: any) {

  const { socket, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res = await database.all()
      const all = res.forEach(u => delete u.password)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('register', async (data: any, callback: any) => {
    const user = await new User(data)
    try {
      const res = await database.post(user)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (data: any, callback: any) => {
    try {
      const res = await database.put(data._id, ...data)
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
      const user = await database.find(fn)
      const res = delete user.password
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const filtered = await database.filter(fn)
      const res = filtered.forEach(u => delete u.password)
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

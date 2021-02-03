import { Manager } from '@scale/database';
import { User } from '@scale/core';

export async function endpoints(context: any) {

  const { socket, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      const all: any = res.forEach((u: any) => delete u.password)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('register', async (data: any, callback: any) => {
    const user: any = await new User(data)
    try {
      const res: any = await database.post(user)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (data: any, callback: any) => {
    try {
      const res: any = await database.put(data._id, ...data)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const user: any = await database.get(id)
      const res: any = delete user.password
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const user: any = await database.find(fn)
      const res: any = delete user.password
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const filtered: any = await database.filter(fn)
      const res: any = filtered.forEach((u: any) => delete u.password)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res: any = await database.remove(id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })
}

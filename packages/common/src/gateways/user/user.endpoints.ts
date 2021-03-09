import { Manager } from '@ecosis/database';
import { User } from '@ecosis/core';

export async function endpoints(context: any) {

  const { socket, space, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      res.forEach((u: any) => delete u.password)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('register', async (data: any, callback: any) => {
    try {
      const user: any = await new User(data)
      await database.post(user)
      delete user.password

      space.emit('register', user)
      callback(null, user)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('update', async (data: any, callback: any) => {
    try {
      const res: any = await database.put(data._id, ...data)
      delete res.password

      space.emit('update', res)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const user: any = await database.get(id)
      delete user.password
      callback(null, user)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const user: any = await database.find(fn)
      delete user.password
      callback(null, user)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const filtered: any = await database.filter(fn)
      filtered.forEach((u: any) => delete u.password)
      callback(null, filtered)
    } catch (err) {
      callback(new Error(err), null)
    }
  })

  socket.on('remove', async (id: string, callback: any) => {
    try {
      const res: any = await database.remove(id)

      space.emit('remove', id)
      callback(null, res)
    } catch (err) {
      callback(new Error(err), null)
    }
  })
}

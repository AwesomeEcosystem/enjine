import { Manager } from '@ecosis/database';
import { User } from '@ecosis/core';

export async function endpoints(context: any) {

  const { socket, space, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      const all: any = res.forEach((u: any) => delete u.password)
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('register', async (data: any) => {
    try {
      const user: any = await new User(data)
      const res: any = await database.post(user)
      const registered = delete user.password

      space.emit('register', user)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('update', async (data: any) => {
    try {
      const res: any = await database.put(data._id, ...data)

      const updated = delete res.password
      space.emit('update', updated)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const user: any = await database.get(id)
      const res: any = delete user.password
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const user: any = await database.find(fn)
      const res: any = delete user.password
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const filtered: any = await database.filter(fn)
      const res: any = filtered.forEach((u: any) => delete u.password)
      callback(res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('remove', async (id: string) => {
    try {
      await database.remove(id)
      space.emit('remove', id)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })
}

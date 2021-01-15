import { Manager } from '@scale/database';
import { User } from '@scale/core';

const manager = new Manager('.database')
const users = manager.create('users')

export async function post(socket: any, user: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new User(user)
  try {
    const res = await users.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, user: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await users.put(user._id, user)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await users.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await users.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await users.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await users.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

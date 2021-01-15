import { Manager } from '@scale/database';
import { Message } from './message.model';

const manager = new Manager('.database')
const messages = manager.create('messages')

export async function post(socket: any, message: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Message(message)
  try {
    const res = await messages.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, message: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await messages.put(message._id, message)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await messages.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await messages.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await messages.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await messages.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

import { Manager, Model } from '@scale/database';

const manager = new Manager('.database')
const docs = manager.create('data')

export async function post(socket: any, doc: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Model(doc)
  try {
    const res = await docs.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, doc: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await docs.put(doc._id, doc)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await docs.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await docs.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await docs.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await docs.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

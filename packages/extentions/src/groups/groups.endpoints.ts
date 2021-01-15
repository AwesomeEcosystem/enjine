import { Manager } from '@scale/database';
import { Group } from './group.model';

const manager = new Manager('.database')
const groups = manager.create('groups')

export async function post(socket: any, group: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Group(group)
  try {
    const res = await groups.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, group: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await groups.put(group._id, group)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await groups.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await groups.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await groups.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await groups.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

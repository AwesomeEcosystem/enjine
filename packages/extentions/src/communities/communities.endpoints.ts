import { Manager } from '@scale/database';
import { Community } from './community.model';

const manager = new Manager('.database')
const communities = manager.create('communities')

export async function post(socket: any, community: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Community(community)
  try {
    const res = await communities.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, community: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await communities.put(community._id, community)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await communities.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await communities.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await communities.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await communities.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

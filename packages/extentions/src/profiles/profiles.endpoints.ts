import { Manager } from '@scale/database';
import { Profile } from './profile.model';

const manager = new Manager('.database')
const profiles = manager.create('profiles')

export async function post(socket: any, profile: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Profile(profile)
  try {
    const res = await profiles.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, profile: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await profiles.put(profile._id, profile)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await profiles.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await profiles.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await profiles.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await profiles.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

import { Manager } from '@scale/database';
import { Organization } from './organization.model';

const manager = new Manager('.database')
const organizations = manager.create('organizations')

export async function post(socket: any, organization: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Organization(organization)
  try {
    const res = await organizations.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, organization: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await organizations.put(organization._id, organization)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await organizations.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await organizations.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await organizations.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await organizations.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

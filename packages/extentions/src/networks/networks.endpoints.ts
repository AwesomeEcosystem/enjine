import { Manager } from '@scale/database';
import { Network } from './network.model';

const manager = new Manager('.database')
const networks = manager.create('networks')

export async function post(socket: any, network: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Network(network)
  try {
    const res = await networks.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, network: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await networks.put(network._id, network)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await networks.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await networks.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await networks.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await networks.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

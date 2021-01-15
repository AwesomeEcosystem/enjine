import { Manager } from '@scale/database';
import { Post } from './post.model';

const manager = new Manager('.database')
const posts = manager.create('posts')

export async function post(socket: any, post: any, callback: any) { // TODO SocketIO & Data Interface
  const data = new Post(post)
  try {
    const res = await posts.post(data)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function update(socket: any, post: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await posts.put(post._id, post)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function get(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await posts.get(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function find(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await posts.find(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function filter(socket: any, fn: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await posts.filter(fn)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

export async function remove(socket: any, id: any, callback: any) { // TODO SocketIO & Data Interface
  try {
    const res = await posts.remove(id)
    callback(null, res)
  } catch (err) {
    callback(new Error(err), null)
  }
}

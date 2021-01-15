import { AuthService } from '@scale/core';

const authService = new AuthService()

// NOTE: Just a Prototype

export async function login(socket: any, event: any, callback: any) { // TODO Credentials Interface
  try {
    const auth = await authService.login(event.credentials, event.ip)
    callback(null, auth)
  } catch (err) {
    callback(err, null)
  }
}

export async function auth(socket: any, event: any, callback: any) { // TODO Credentials Interface
  try {
    const auth = await authService.validateToken(event.token, event.user_id, event.ip)
    callback(null, auth)
  } catch (err) {
    callback(err, null)
  }
}

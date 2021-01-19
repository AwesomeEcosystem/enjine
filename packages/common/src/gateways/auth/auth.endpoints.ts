import { AuthService } from '@scale/core';

const authService = new AuthService()

export async function endpoints(socket: any) {

  socket.on('login', async (data: any, callback: any) => {
    try {
      const auth = await authService.login(data.credentials, data.ip)
      callback(null, auth)
    } catch (err) {
      callback(err, null)
    }
  })

  socket.on('auth', async (data: any, callback: any) => {
    try {
      const auth = await authService.validateToken(data.token, data.user_id, data.ip)
      callback(null, auth)
    } catch (err) {
      callback(err, null)
    }
  })
}

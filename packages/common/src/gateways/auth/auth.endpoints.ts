import { AuthService } from '@scale/core';

export async function endpoints(context: any) { // context Interface

  const { socket, database } = context; // TODO Sesion DB

  const users = database.create('users');
  const sessions = database.create('sessions');

  const authService = new AuthService(users, sessions)

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

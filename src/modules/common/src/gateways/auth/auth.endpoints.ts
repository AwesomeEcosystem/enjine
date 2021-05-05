import { AuthService } from '@enjine/core';

export async function endpoints(context: any) { // context Interface

  const { socket, space, database } = context; // TODO Sesion DB

  const users = database.create('user');
  const sessions = database.create('session');

  const authService: any = new AuthService(users, sessions)

  socket.on('login', async (data: any, callback: any) => {
    try {
      const auth: any = await authService.login(data, socket.handshake.address)

      callback(null, auth)
    } catch (err) {
      callback(err, null)
    }
  })

  socket.on('validate', async (data: any, callback: any) => {
    try {
      const validated: any = await authService.validateToken(data.token, data._id, data.ip) // TODO Interface

      callback(null, validated)
    } catch (err) {
      callback(err, null)
    }
  })
}

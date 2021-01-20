import { AuthService } from '@scale/core';

export async function endpoints(context: any) { // context Interface

  const { socket, database } = context; // TODO Sesion DB

  const users = database.create('user');
  const sessions = database.create('session');

  const authService: any = new AuthService(users, sessions)

  socket.on('login', async (data: any, callback: any) => {
    try {
      const auth: any = await authService.login(data, socket.handshake.ip)

      callback(null, auth)
    } catch (err) {
      callback(err, null)
    }
  })
}

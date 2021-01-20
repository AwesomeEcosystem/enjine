import { Manager } from '@scale/database'; // TODO Root Database
import { AuthService } from '../services/auth.service';
import { Exception } from '../exceptions/exception';

// TODO Database must be injectable like in gateways and endpoints

const database = new Manager('.database')

const users = database.create('user');
const sessions = database.create('session');

const authService = new AuthService(users, sessions)

export async function authMiddleware(socket: any, next: any) {
  if (!socket.handshake.query.token && socket.handshake.query.login) {

    const loginData = socket.handshake.query.login
    const ip = socket.handshake.adress

    console.log(loginData.username);


    const authenticated = await authService.login(loginData, ip)

    if (!authenticated) {
      const error = new Exception(403, 'Not Authenticated!')
      next(error)
    }
    next()

  } else if (socket.handshake.query.token) {

    const { token, userid } = socket.handshake.query
    const ip = socket.handshake.adress

    const validated = await authService.validateToken(token, userid, ip)

    if (!validated) {
      const error = new Exception(403, 'Not Authenticated!')
      next(error)
    }
    next()

  }
}

import { Manager } from '@scale/database'; // TODO Root Database
import { AuthService } from '../services/auth.service';
import { Exception } from '../exceptions/exception';

// TODO Database must be injectable like in gateways and endpoints

const database = new Manager('.database')

const users = database.create('user');
const sessions = database.create('session');

const authService: any = new AuthService(users, sessions)

// io.use(wrap(passport.initialize()));
// io.use(wrap(passport.session()));

export async function authMiddleware(socket: any, next: any) {
  try {
    const { token, _id }: any = socket.handshake.auth.ticket
    const ip = socket.handshake.adress // TODO IP is undefined

    const validated = await authService.validateToken(token, _id, ip)

    if (!validated) {
      const error = new Exception(403, 'Not Authenticated!')
      next(error)
    }
    
    next()
  } catch (error) {
    next(error)
  }

}
//
// if (!socket.handshake.query.token && socket.handshake.query.login) {
//
//   const loginData = socket.handshake.query.login
//   const ip = socket.handshake.adress
//
//   console.log(loginData.username);
//
//
//   const authenticated = await authService.login(loginData, ip)
//
//   if (!authenticated) {
//     const error = new Exception(403, 'Not Authenticated!')
//     next(error)
//   }
//   next()
//
// }

import manager from '@scale/database'; // TODO Root Database
import { AuthService } from '../services/auth.service';
import { Exception } from '../exceptions/exception';

const authService = new AuthService()

export default async function authMiddleware(socket: any, next: any) {
  if (!socket.handshake.query.token && socket.handshake.query.login) {

    const loginData = socket.handshake.query.login
    const ip = socket.handshake.adress

    const authenticated = await authService.login(loginData, ip)

    if (!authenticated) {
      const error = new Exception(403, 'Not Authenticated!')
      next(error)
    }

    next()
  } else {

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

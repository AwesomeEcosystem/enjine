import manager from '../database'; // TODO Root Database
import { AuthService } from '../services/auth.service';

export default async function authMiddleware(socket: any, next: any) {
  if (socket.handshake.query.token) {
    const { token, userid, ip } = socket.handshake.query
    AuthService.validateToken(token, userid, ip)
  }
}

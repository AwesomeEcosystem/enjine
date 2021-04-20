import { Auth } from '@enjine/session';
import { Exception } from '../exceptions/exception';

export async function proxyMiddleware(gateway: any) { // TODO Dev a real generic extendable proxy middleware and extend proxyAuthMiddleware
  const auth = new Auth(gateway)

  return async function middleware(socket: any, next: any) {
    try {

      let res: any = await auth.validate(socket.handshake.auth.ticket)
      if (res) next();

    } catch (error) {
      next(new Exception(403, error))
    }
  }
}

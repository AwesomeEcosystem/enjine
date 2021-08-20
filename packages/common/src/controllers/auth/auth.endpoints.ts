import { AuthService } from '@enjine/core';

export async function endpoints(context: any) { // context Interface

  const { router, database } = context; // TODO Sesion DB

  const users = database.create('user'); // TODO there is a better way
  const sessions = database.create('session');

  const authService: any = new AuthService(users, sessions) // TODO AuthService Interface

  router.on('/login', async (req: any, res: any) => {
    try {
      const auth: any = await authService.login(req.body.data, req.handshake.address)

      res.send(null, auth)
    } catch (err) {
      res.send(err, null)
    }
  })

  router.on('/validate', async (req: any, res: any) => {
    try {
      const validated: any = await authService.validateToken(req.body.data.token, req.body.data._id, req.body.data.ip) // TODO Interface

      res.send(null, validated)
    } catch (err) {
      res.send(err, null)
    }
  })
}

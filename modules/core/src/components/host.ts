import { createServer as createHttp } from 'http';
import { createServer as createHttps } from 'https';
// import { createProxyServer as createProxy } from 'http-proxy';
import express from 'express';
import { Nuxt, Builder } from 'nuxt';
import consola from 'consola';

export class Host {
  // public env: boolean;
  public app: express.Application;
  public server: any = {}; // TODO Interface
  public instances: any[] = []; // TODO Interface Gateways
  public middleware: any = []; // TODO Interface Middlewares
  public config: any = {}; // TODO Interface Config

  constructor(config: any) {
    this.config = config || {
      cors: { origin: '*', credentials: false },
      transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']
    };
  }

  public add(instance: any) {
    this.instances.push(instance);
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize() {

    this.app = express();
    this.server = {
      // proxy: createProxy({}),
      http: createHttp(this.app),
      https: (this.config.secure) ? createHttps(this.config.secure, this.app) : null
    }

    if (this.middleware) {
      for (const middleware of this.middleware) {
        // this.app.use((req: any, res: any, next) => middleware(req, res, next)) // TODO multimiddleware
        // this.io.use((socket, next) => middleware(socket.request, {}, next))
      }
      // TODO Real Passport Session
      // app.use(wrap(passport.initialize()));
      // app.use(wrap(passport.session()));
    }

    if (this.instances) {
      for (const instance of this.instances) {
        instance.initialize(this.server, this.app, this.config)
      }
    };
    consola.success(`${(this.config.secure) ? 'Secure ' : ''}Host initialized!`)

  }

  public async bootstrap() {

    const isDev = process.env.NODE_ENV !== 'production'

    this.initialize()

    if (this.config.nuxt) {
      const nuxt: any = new Nuxt(this.config.nuxt)
      await nuxt.ready()

      // Render every route with Nuxt.js
      this.app.use(nuxt.render)

      // Build only in dev mode with hot-reloading
      if (isDev) {
        const builder: any = new Builder(nuxt)
        await builder.build()
      }
    }

    this.server.http.listen(this.config.port || 80, this.config.host || 'localhost');

    if (this.config.secure) {

      this.app.enable('trust proxy');

      this.app.use((req: any, res: any, next: any) => { // TODO INterfaces
        if (req.secure) {
          next()
        } else {
          res.redirect('https://' + req.headers.host + (this.config.secure) ? this.config.secure.port : 443 + req.url)
        }
      })

      this.server.https.listen(this.config.port || 443, this.config.host || 'localhost')
    }
    consola.info(`${(this.config.secure) ? 'Secure' : ''} Application listening on htt${(this.config.secure) ? 'ps' : 'p'}://${this.config.host || 'localhost'}:${this.config.port || 8000}`)
  }
}

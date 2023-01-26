// import path from 'path'
import { createServer as createHttp } from 'http';
import { createServer as createHttps } from 'https';
import express from 'express';
// import proxy from 'express-http-proxy';
// import subdomain from 'express-subdomain';
// import { Nuxt, Builder } from 'nuxt';
import consola from 'consola';

const cors = { origin: '*', credentials: false };
const transports = ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'];

export class Host {
  // public env: boolean;
  public app: express.Application;
  public server: any = {}; // TODO Interface
  public middlewares: any = []; // TODO Interface Middlewares
  public proxies: any[] = []; // TODO Interface Proxies
  public instances: any[] = []; // TODO Interface Gateways
  public config: any = {}; // TODO Interface Config

  constructor(config?: any) {
    this.config = config || {
      cors: (config)? config.cors : cors,
      transports: (config)? config.transports : transports
    }
  }

  public add(instance: any) {
    this.instances.push(instance);
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middlewares.push(middleware)
  }

  public initialize() {

    this.app = express();
    this.server = {
      // proxy: createProxy({}),
      http: createHttp(this.app),
      https: (this.config.secure) ? createHttps(this.config.secure, this.app) : null
    }

    // if (this.middlewares) { // TODO Middleware injection method
    //   for (const middleware of this.middlewares) {
    //     // this.app.use((req: any, res: any, next) => middleware(req, res, next)) // TODO multimiddleware
    //     // this.io.use((socket, next) => middleware(socket.request, {}, next))
    //   }
    //   // TODO Real Passport Session
    //   // app.use(wrap(passport.initialize()));
    //   // app.use(wrap(passport.session()));
    // }

    // if (this.proxies) { TODO enable proxies
    //   for (let route of this.proxies) {
    //     this.app.use(subdomain(route.from, proxy(route.to)))
    //   }
    // }

    if (this.instances) {
      for (const instance of this.instances) {
        instance.initialize(this.server, this.app, this.config)
      }
    };
    consola.success(`${(this.config.secure) ? 'Secure ' : ''}Host initialized`)

  }

  public async bootstrap() {

    // const isDev = process.env.NODE_ENV !== 'production'

    this.initialize()

    // if (this.config.nuxt) { // TODO implement Nuxt 3
    //   const config: any = (typeof this.config.nuxt === 'object') ? this.config.nuxt : path.join(__dirname, 'nuxt.config');
    //
    //   const nuxt: any = new Nuxt(config)
    //   await nuxt.ready()
    //
    //   // Render every route with Nuxt.js
    //   this.app.use(nuxt.render)
    //
    //   // Build only in dev mode with hot-reloading
    //   if (isDev) {
    //     const builder: any = new Builder(nuxt)
    //     await builder.build()
    //   }
    // }

    this.server.http.listen(this.config.port || 80, this.config.host || 'localhost');

    if (this.config.secure) {

      this.app.enable('trust proxy');

      this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => { // TODO INterfaces
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

  proxy(from: string, to: string) {
    this.proxies.push({ from, to })
  }
}

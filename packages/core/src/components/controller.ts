import path from 'path'
import express from 'express'

export class Controller {
  public name: string;
  public database: any;
  public middleware: any[]; // TODO Interface Middlewares
  public endpoints: any; // TODO Interface Endpoints
  public router: any;

  constructor(name: string, endpoints: any, db?: any) { // TODO DB Interface
    this.name = name;
    this.database = db || {};
    this.endpoints = endpoints;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize(router: any) { // TODO Express Interface
    this.router = router

    if (this.middleware) {
      for (const middleware of this.middleware) {
        this.router.use((req: any, res: any, next: any) => middleware(req, res, next)) // TODO this.namespace.use((socket: any, next: any) => middleware(socket, next))
      }
      // TODO Real Passport Session
      // io.use(wrap(passport.initialize()));
      // io.use(wrap(passport.session()));
    }

    this.endpoints({ router: this.router, database: this.database })
  }

  // public client(path: any) {
  //   this.router.get('/', (req: any, res: any) => {
  //     res.sendFile(path.join(__dirname, path))
  //   })
  // }
}

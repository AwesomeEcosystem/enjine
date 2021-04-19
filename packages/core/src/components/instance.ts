import { Server, Socket } from 'socket.io';
import { Application, Router } from 'express';
import cors from 'cors';

export class Instance {
  public name: string;
  public host: any; // TODO express Interface
  public io: any; // TODO SocketIO Interface
  public app: Application;
  public http: any; // tODO Http
  public gateway: any[]; // TODO Gateways Interface
  public controller: any[]; // TODO Controller Interface
  public middleware: any[]; // TODO Type Middlewares

  constructor(name: string, modules: any) {
    this.name = name;
    this.gateway = modules.gateway || [];
    this.controller = modules.controller || [];
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize(http: any, app: Application, config: any) {

    this.http = http;
    this.app = app;

    if (this.gateway) {
      this.io = new Server(http, config);
      for (const gateway of this.gateway) {
        gateway.initialize(this.io);
      };
    }

    if (this.controller) {

      this.app.use(cors({
        origin: (config.cors) ? config.cors.origin : '*'
      }))

      for (const controller of this.controller) {

        controller.initialize(Router());
        this.app.use(controller.name, controller.router)
      };
    }

    if (this.middleware) {
      for (const middleware of this.middleware) {
        this.app.use((req: any, res: any, next: any) => middleware(req, res, next))
      }
      // TODO Real Passport Session
      // app.use(wrap(passport.initialize()));
      // app.use(wrap(passport.session()));
    }

    console.log(`Instance '${this.name}' initialized`); // TODO Fancy Logger
  }

  public client(path: any) {
    this.app.get('/', (req: any, res: any) => {
      res.sendFile(path.join(__dirname, path))
    })
  }
}

import { Server } from 'socket.io';
import { Application, Router } from 'express';
import cors from 'cors';
import consola from 'consola';

export class Instance {
  public name: string;
  public host: any; // TODO express Interface
  public io: any;// TODO SocketIO Interface
  public app: Application;
  public server: any; // TODO Http
  public gateway: any[] = []; // TODO Gateways Interface
  public controller: any[] = []; // TODO Controller Interface
  public middleware: any[] = []; // TODO Type Middlewares

  constructor(config: any) {
    this.name = config.name || '';
    this.gateway = config.gateway || [];
    this.controller = config.controller || [];
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize(server: any, app: Application, config: any) {

    this.server = server;
    this.app = app;

    if (this.gateway) {
      this.io = new Server((server.https) ? server.https : server.http, config);
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
        if (this.io) {
          this.io.use((socket: any, next: any) => middleware(socket, next)) // TODO express wrapped middleware
        }
        if (this.app) {
          // this.app.use((req: any, res: any, next: any) => middleware(req, res, next))
        }
      }
      // TODO Real Passport Session
      // app.use(wrap(passport.initialize()));
      // app.use(wrap(passport.session()));
    }
    consola.success(`Instance ${(this.name) ? this.name + ' ' : ''}initialized`);
  }

  public client(path: any) {
    this.app.get('/', (req: any, res: any) => {
      if (req) {
        res.sendFile(path.join(__dirname, path))
      }
    })
  }
}

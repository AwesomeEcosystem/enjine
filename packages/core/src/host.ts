import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import SocketIO  from 'socket.io';
import helmet from 'helmet';
import hpp from 'hpp';
import logger from 'morgan';

import Routes from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';

import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import AuthRoute from './routes/auth.route';

export class Host {
  public app: express.Application;
  public io: SocketIO.Server;
  public port: (string | number);
  public env: boolean;
  public gateways: any; // TODO Type Gateways
  public middlewares: any; // TODO Type Middlewares
  public config: any; // TODO Type Config

  constructor(config: any) {
    this.app = express();
    this.io = SocketIO.listen();

    this.config = config;

    this.port = process.env.PORT || config.port || 9090;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

  }

  public add(gateways: any) {
    this.gateways = gateways;
  }

  public use(middleware: any) {
    this.middlewares.push(middleware);
  }

  public listen() {

    if (this.gateways) {
      for (const gateway of this.gateways) {
        gateway.init(this.io)
      }
    }

    this.subscribe();
    this.initializeMiddlewares();
    this.initializeRoutes([
      new IndexRoute(),
      new UsersRoute(),
      new AuthRoute(),
    ]);
    this.initializeErrorHandling();

    const http = this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
    this.io.attach(http);
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    if (this.env) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger('combined'));
      this.app.use(cors(this.config.cors || { origin: '*', credentials: true }));
    } else {
      this.app.use(logger('dev'));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    if (this.middlewares) {
      for (const middleware of this.middlewares) {
        this.app.use(middleware);
      }
    }


  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private async subscribe() {
    // TODO Session Connection
  }
}

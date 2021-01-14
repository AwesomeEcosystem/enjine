import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
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
  public port: (string | number);
  public env: boolean;
  public instances: any; // TODO Type Gateways
  public middlewares: any; // TODO Type Middlewares
  public config: any; // TODO Type Config

  constructor(config: any) {
    this.app = express();

    this.config = config || null;

    this.port = process.env.PORT || config.port || 9090;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

  }

  public add(instances: any) {
    this.instances = instances;
  }

  public use(middleware: any) {
    this.middlewares.push(middleware);
  }

  public listen() {

    this.subscribe();
    this.initializeMiddlewares();
    this.initializeRoutes([
      // new IndexRoute(),
      // new UsersRoute(),
      // new AuthRoute(),
    ]);
    this.initializeErrorHandling();

    const http = createServer();

    if (this.instances) {
      for (const instance of this.instances) {
        instance.init(http, this.config)
      }
    };

    http.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    if (this.env) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger('combined'));
      this.app.use(cors({ origin: '*', credentials: false }));
    } else {
      this.app.use(logger('dev'));
      this.app.use(cors({ origin: '*', credentials: false }));
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

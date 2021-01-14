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
  public port: (string | number);
  public env: boolean;
  public instances: any; // TODO Type Gateways
  public middlewares: any; // TODO Type Middlewares
  public config: any; // TODO Type Config

  constructor(config: any) {

    this.config = config || null;

    this.port = process.env.PORT || config.port || 9090;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

  }

  public add(instances: any) {
    this.instances = instances;
  }

  public listen() {

    const http = createServer();

    if (this.instances) {
      for (const instance of this.instances) {
        instance.initialize(http, this.config)
      }
    };

    http.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }
}

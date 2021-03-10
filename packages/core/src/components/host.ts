import { createServer } from 'http';
import express from 'express';
import logger from 'morgan';

export class Host {
  public port: (string | number);
  public env: boolean;
  public app: express.Application;
  public http: any;
  public instances: any[]; // TODO Type Gateways
  public middleware: any; // TODO Type Middlewares
  public config: any; // TODO Type Config

  constructor(config: any) {

    this.config = config || null;
  }

  public add(instances: any) {
    this.instances = instances;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public listen(port: (string | number)) {

    this.port = process.env.PORT || port || 9090;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

    this.app = express();
    this.http = createServer(app);

    if (this.middleware) {
      for (const middleware of this.middleware) {
        this.app.use((req: any, res: any, next) => middleware(req, res, next))
      }
      // TODO Real Passport Session
      // app.use(wrap(passport.initialize()));
      // app.use(wrap(passport.session()));
    }

    if (this.instances) {
      for (const instance of this.instances) {
        instance.initialize(this.http, this.app, this.config)
      }
    };

    this.http.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }
}

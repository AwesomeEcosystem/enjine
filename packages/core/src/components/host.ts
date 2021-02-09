import { createServer } from 'http';
import logger from 'morgan';

export class Host {
  public port: (string | number);
  public env: boolean;
  public instances: any[]; // TODO Type Gateways
  public middlewares: any; // TODO Type Middlewares
  public config: any; // TODO Type Config

  constructor(config: any) {

    this.config = config || null;
  }

  public add(instances: any) {
    this.instances = instances;
  }

  public listen(port: (string | number)) {

    this.port = process.env.PORT || port || 9090;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

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

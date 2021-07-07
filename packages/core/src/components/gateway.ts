import consola from 'consola';
import { Socket } from 'socket.io';

export class Gateway {
  public name: string;
  public database: any;
  public middleware: any[]; // TODO Interface Middlewares
  public endpoints: any; // TODO Interface Endpoints
  public namespace: any;

  constructor(name: string, endpoints: any, db?: any) { // TODO DB Interface
    this.name = name;
    this.database = db || {};
    this.endpoints = endpoints;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize(io: any) {

    this.namespace = io.of(this.name)

    if (this.middleware) {
      for (const middleware of this.middleware) {

        this.namespace.use((socket: Socket, next: any) => middleware(socket, next))
      }
      // TODO Real Passport Session
      // io.use(wrap(passport.initialize()));
      // io.use(wrap(passport.session()));
    }

    this.namespace.on('connection', (event: any) => this.connection(event));
    // this.namespace.on('disconnect', (event: any) => this.disconnection(event));
    consola.success(`Gateway ${(this.name) ? this.name + ' ' : ''}initialized`); // TODO Global custom Logger Interface
  }

  private async connection(socket: Socket){
    this.endpoints({ socket, namespace: this.namespace, database: this.database })
  }

  // private disconnection(socket: Socket){
  //   console.log('SocketIO onDisconnect', socket.id);
  // }
}

// import { any, any }  from 'socket.io';
import { AuthService } from '../services/auth.service';

export class Gateway {
  public name: string;
  public database: any;
  public middleware: any[]; // TODO Interface Middlewares
  public endpoints: any; // TODO Interface Endpoints
  public namespace: any;

  constructor(name: string, db: any, endpoints: any) { // TODO DB Interface
    this.name = name;
    this.database = db;
    this.endpoints = endpoints;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middleware.push(middleware)
  }

  public initialize(io: any) {

    this.namespace = io.of(this.name)

    if (this.middleware) {
      for (const middleware of this.middleware) {

        this.namespace.use((socket: any, next: any) => middleware(socket, next))
      }
      // TODO Real Passport Session
      // io.use(wrap(passport.initialize()));
      // io.use(wrap(passport.session()));
    }

    this.namespace.on('connection', (event: any) => this.connection(event));
    this.namespace.on('disconnect', (event: any) => this.disconnection(event));
    console.log(`Gateway '${this.name}' initialized`);
  }

  private async connection(socket: any){
    console.log(`New Client connected to Gateway '${this.name}'`, socket.id);

    // TODO Push Client into Connections

    this.endpoints({ socket, space: this.namespace, database: this.database })
  }

  private disconnection(socket: any){
    console.log('SocketIO onDisconnect', socket.id);
  }
}

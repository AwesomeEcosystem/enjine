import { Socket, Server }  from 'socket.io';
import { AuthService } from '../services/auth.service';

export class Gateway {
  public name: string;
  private io: Server;
  private middlewares: any[]; // TODO Interface Middlewares
  private endpoints: any; // TODO Interface Endpoints
  private connections: { [ id: string ] : Socket; } = {};

  constructor(name: string, endpoints: any) {
    this.name = name;
    this.middlewares = [];
    this.endpoints = endpoints;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middlewares.push(middleware)
  }

  public initialize(io: Server){
    this.io = io;

    if (this.middlewares) {
      for (const middleware of this.middlewares) {
        this.io.use(middleware)
      }
    }

    this.io.of(this.name).on('connection', (event: Socket) => this.connection(event));
    this.io.of(this.name).on('disconnect', (event: Socket) => this.disconnection(event));
    console.log(`Gateway '${this.name}' initialized`);
  }

  private async connection(socket: Socket){
    console.log('New Client ', socket.id);

    // TODO Push Client into Connections

    for (const endpoint of this.endpoints) {
      socket.on(endpoint.name, endpoint)
    }

  }

  private disconnection(socket: Socket){
    console.log('SocketIO onDisconnect', socket.id);
  }
}

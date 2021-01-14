import { Socket, Server }  from 'socket.io';
import { User } from '../interfaces/users.interface';
import AuthService from '../services/auth.service';

export class Gateway {
  public name: string;
  private io: Server;
  private middlewares: any; // TODO Type Middlewares
  private endpoints: any; // TODO Type Endpoints
  private connections: { [ id: string ] : Socket; } = {};

  constructor(name: string, endpoints: any) {
    this.name = name;
    this.endpoints = endpoints;
  }

  public use(middleware) {
    this.middlewares.push(middleware)
  }

  public initialize(io: Server){
    this.io = io;

    if (this.middlewares) {
      for (const middleware of middlewares) {
        this.io.use(middleware)
      }
    }

    this.io.of(this.name).on('connection', (event: Socket) => this.onConnection(event));
    this.io.of(this.name).on('disconnect', (event: Socket) => this.onDisconnect(event));
    console.log(`Gateway '${this.name}' initialized`);
  }

  private async connection(socket: Socket){
    console.log('New Client ', socket.id);
  }

  private disconnection(socket: Socket){
    console.log('SocketIO onDisconnect', socket.id);
  }

}

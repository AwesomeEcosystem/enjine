import { Socket, Server }  from 'socket.io';
import { AuthService } from '../services/auth.service';

export class Gateway {
  public name: string;
  public middlewares: any[] = []; // TODO Interface Middlewares
  public endpoints: any; // TODO Interface Endpoints
  public connections: { [ id: string ] : Socket; } = {};

  constructor(name: string, endpoints: any) {
    this.name = name;
    this.endpoints = endpoints;
  }

  public use(middleware: any) { // TODO Middleware Interface
    this.middlewares.push(middleware)
  }

  public initialize(io: Server){

    if (this.middlewares) {
      for (const middleware of this.middlewares) {
        io.use(middleware)
      }
    }

    io.of(this.name).on('connection', (event: Socket) => this.connection(event));
    io.of(this.name).on('disconnect', (event: Socket) => this.disconnection(event));
    console.log(`Gateway '${this.name}' initialized`);
  }

  private async connection(socket: Socket){
    console.log('New Client ', socket.id);

    // TODO Push Client into Connections
    this.endpoints(socket)
  }

  private disconnection(socket: Socket){
    console.log('SocketIO onDisconnect', socket.id);
  }
}

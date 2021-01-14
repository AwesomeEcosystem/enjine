import { Socket, Server }  from 'socket.io';
import { User } from '../interfaces/users.interface';
import AuthService from '../services/auth.service';

export class Gateway {
  public name: string;
  private endpoints: any; // TODO Type Endpoints
  private auth: AuthService = new AuthService();
  private connections: { [ id: string ] : Socket; } = {};
  private pendingConnections: { [ id: string ] : Socket; } = {};
  private io: Server;

  constructor(name: string, endpoints: any) {
    this.name = name;
    this.endpoints = endpoints;
  }

  public init(io: Server){
    this.io = io;
    this.io.of(this.name).on('connection', (event: Socket) => this.onConnection(event));
    this.io.of(this.name).on('disconnect', (event: Socket) => this.onDisconnect(event));
    console.log(`Gateway '${this.name}' initialized`);
  }

  private async onConnection(socket: Socket){
    console.log('New Client ', socket.id);

    if (socket.conn.request._query['token']) {
      //if token specified, authenticate onConnect and listen to connection
      const token = socket.conn.request._query['token'];
      const userId = socket.conn.request._query['user'];
      try{
        const user: User = await this.auth.validateToken(token, userId, socket.conn.request.ip)
        this.listenToClientSocket(socket);
      } catch (e) {
        socket.disconnect();
      }
    } else {
      // if token is not specified, set auth timeout and listen for auth event for token
      // pendingConnections dictionary will hold the socket until authenticated
      this.pendingConnections[socket.id] = socket;
      const authTimeout: number = process.env.SOCKET_AUTH_TIMEOUT ? Number(process.env.SOCKET_AUTH_TIMEOUT) : 15000;

      // decline after 15 sec
      setTimeout(() => {
        if (this.pendingConnections[socket.id]) {
          console.log(`Force disconnect ${socket.id}`);
          this.pendingConnections[socket.id].disconnect();
          delete this.pendingConnections[socket.id];
        }
      }, authTimeout)

      // listen for auth event
      socket.on('auth', (event) => this.onAuth(socket.id, event));
    }
  }

  /**
   * Listen to client socket for message event
   */
  private listenToClientSocket(socket: Socket){
    this.connections[socket.id] = socket;

    for (const endpoint of this.endpoints) {
      this.connections[socket.id].on(endpoint.name, (data: any) => endpoint.fn(socket.id, data));
    }
    // this.connections[socket.id].on('data', (data: any) => this.onData(socket.id, data));
  }

  /**
   * auth message event handler
   * client is supposed to fire auth event with 'chat auth token' and 'user id'
   * listener with authenticate request and start listening to message
   */
  private async onAuth(socketId: string ,data: any){
    console.log('SocketIO onAuth', data);
    try {
      const user: User = await this.auth.validateToken(data.token, data.user, this.pendingConnections[socketId].conn.request.ip)
      this.listenToClientSocket(this.pendingConnections[socketId])
    } catch(e) {
      this.pendingConnections[socketId].disconnect();
    }
    delete this.pendingConnections[socketId];
  }

  // private onData(socketId: string, data: any){
  //   console.log(`SocketIO onData ${socketId}`, data);
  // }

  private onDisconnect(socket: Socket){
    console.log('SocketIO onDisconnect', socket.id);
  }

}

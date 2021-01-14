import SocketIO from 'socket.io';

const { Server, Socket } = SocketIO

export class Instance {
  public name: string;
  public io: SocketIO;
  public gateways: any; // TODO Type Gateways

  constructor(name: string, gateways: any) {
    this.name = name;
    this.gateways = gateways;
  }

  public initialize(http: any, config: any) {

    this.io = new Server(http, config);

    for (const gateway of this.gateways) {
      gateway.initialize(this.io);
    };

    console.log(`Instance '${this.name}' initialized`);
  }
}

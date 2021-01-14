import { Server, Socket } from 'socket.io';

export class Instance {
  public name: string;
  public gateways: any; // TODO Type Gateways
  public io: any; // TODO io Type

  constructor(name: string, gateways: any) {
    this.name = name;
    this.gateways = gateways;
  }
  public init(http: any) {

    this.io = new Server(http, {
      cors: {
        origin: '*'
      }
    });

    for (const gateway of this.gateways) {
      gateway.init(this.io);
    };

    console.log(`Instance '${this.name}' initialized`);
  }

}

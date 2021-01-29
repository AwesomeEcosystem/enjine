import { io } from 'socket.io-client'

export class Session { // TODO Exent EventErmitter or SocketIO Manager
  public config: any;
  public socket: any; // Interfaces

  constructor(config: any) { // TODO Config Interface
    this.config = config
    this.socket = io(`${config.host}/${config.gateway}`, {
      query: config.ticket
    });

    this.socket.on('connect_error', (err: any) => {
      console.log(err);

    })
  }

  public async emit(name: any) { // TODO Interfaces
    return new Promise((resolve: any, reject: any) => {
      this.socket.emit(name, async (err: any, res: any) => {
        if (err) return reject(err);
        resolve(res);
      })
    });
  }

  // public async emit(name: any, data: any, callback: any) { // TODO Interfaces
  //   this.socket.emit(name, data, callback)
  // }

  // public async on(name: any, data: any, callback: any) { // TODO Interfaces
  //   this.socket.on(name, data, callback)
  // }
}

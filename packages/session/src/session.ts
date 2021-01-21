import { io } from 'socket.io-client'

export class Session { // TODO Exent EventErmitter or SocketIO Manager
  public config: any;
  public socket: any; // Interfaces

  constructor(config: any) { // TODO Config Interface
    this.config = config

    this.socket = io(`${config.host}/${config.gateway}`, {
      auth: config.auth
    })
  }

  public async emit(name: any, data: any, callback: any) { // TODO Interfaces
    this.socket.emit(name, data, callback)
  }

  public async on(name: any, data: any, callback: any) { // TODO Interfaces
    this.socket.on(name, data, callback)
  }
}

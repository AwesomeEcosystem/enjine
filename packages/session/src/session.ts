import { io } from 'socket.io-client'

export class Session {
  public config: any;
  public socket: any; // Interfaces

  constructor(config: any) { // TODO Config Interface
    this.config = config

    this.socket = io(`${config.host}/${config.gateway}`, {
      query: {
        auth: config.auth
      }
    })

    this.socket.on('connect', () => {

    })
  }

}

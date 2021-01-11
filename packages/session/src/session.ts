import { io } from 'socket.io-client'
import { EventEmitter } from 'events';

export class Session extends EventEmitter {
  // url: string;
  config: any;
  token: string;
  socket: any;
  // feeds: Feed[] = [];
  constructor(config: any) { // TODO Config Interface
    super()
    this.config = config

    // if (localStorage) {
    //   this.url = localStorage.access_url
    //   if (localStorage.access_token) {
    //     this.token = localStorage.access_token
    //     console.log('access_token', localStorage.access_token);
    //   }
    // }

    // Instance Connection
    console.log(`Connecting`);

    this.socket = io(this.config.host + '/' + this.config.gateway || '', {
      path: this.config.instance
    })

    this.socket.on('connect', () => {
      console.log('Connected');
      // TODO this.emit('error', err)
    })

    this.socket.on('connect_error', (err: any) => {
      console.log(err);
      // TODO this.emit('error', err)
    })

    this.socket.on('disconnect', (res: any) => {
      if (res) {
        console.log(res);
      }
    })
  }
}

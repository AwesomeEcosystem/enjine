import { io } from 'socket.io-client'
import { EventEmitter } from 'events';

export class Session extends EventEmitter {
  url: string;
  path: string;
  token: string;
  socket: any;
  // feeds: Feed[] = [];
  constructor(path: string) {
    super()
    this.path = path || ''

    if (localStorage) {
      this.url = localStorage.access_url
      if (localStorage.access_token) {
        this.token = localStorage.access_token
        console.log('access_token', localStorage.access_token);
      }
    }

    // Instance Connection
    console.log(`Connecting to '${this.url + this.path}'`);

    this.socket = io(this.url + this.path, {
      query: {
        token: localStorage.access_token
      }
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
        // TODO this.emit('error', err)
      }
    })
  }
}

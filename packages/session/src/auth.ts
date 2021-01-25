import { io } from 'socket.io-client'

export class Auth {
  public credentials: string
  public host: string;
  public gateway: string;
  public socket: any;

  constructor(instance: any) { // TODO credentials Interface
    this.host = instance.host
    this.gateway = instance.gateway
  }

  public async login(credentials: any) { // TODO Creds Interface
    this.socket = io(`${this.host}/${this.gateway}`)

    return new Promise((resolve: any, reject: any) => {
      this.socket.emit('login', credentials, async (err: any, res: any) => {
        if (err) return reject(err);

        this.credentials = res;
        resolve(res);
      })
    });
  }
}

import { io } from 'socket.io-client'

export class Auth {
  public ticket: string
  public host: string;
  public gateway: string;
  public socket: any;

  constructor(instance: any) { // TODO credentials Interface
    this.host = instance.host
    this.gateway = instance.gateway
    this.socket = io(`${this.host}/${this.gateway}`)
  }

  public async login(credentials: any) { // TODO Creds Interface

    return new Promise((resolve: any, reject: any) => {
      this.socket.emit('login', credentials, async (err: any, res: any) => {
        if (err) return reject(err);

        this.ticket = res;
        resolve(res);
      })
    });
  }

  public validate(ticket: any) { // TODO upgraged logic & Ticket Interface
    return new Promise((resolve: any, reject: any) => {
      this.socket.emit('auth', ticket, async (err: any, res: any) => {
        if (err) return reject(err);
        resolve(res);
      })
    });
  }
}

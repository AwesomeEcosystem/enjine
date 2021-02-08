import { io } from 'socket.io-client'
import { Auth } from './auth';

export class Session { // TODO Exent EventErmitter or SocketIO Manager
  public ticket: any = null;
  public config: any = null;
  public gateway: any = null; // Interfaces

  constructor(config: any) {
    this.config = config
  }

  public async init() { // Make it multi sessionable
    return new Promise(async (resolve: any, reject: any) => {
      if (localStorage && localStorage.getItem('ticket_token')) {
        try {
          this.ticket = {
            token: localStorage.getItem('ticket_token'),
            expiresAt: localStorage.getItem('ticket_expiresAt'),
            ip: localStorage.getItem('ticket_ip'),
            user: localStorage.getItem('ticket_user'),
            _id: localStorage.getItem('ticket__id')
          }
          resolve(true);
        } catch (e) {
          reject(e);
        }
      } else {
        resolve(true);
      }
    })
  }

  public async login(credentials: any) { // TODO Creds Interface
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const auth: any = new Auth({
          host: this.config.host,
          gateway: this.config.gateway
        })

        this.ticket = await auth.login(credentials)
        if (localStorage) {
          localStorage.setItem('ticket_token', this.ticket.token)
          localStorage.setItem('ticket_expiresAt', this.ticket.expiresAt)
          localStorage.setItem('ticket_ip', this.ticket.ip)
          localStorage.setItem('ticket_user', this.ticket.user)
          localStorage.setItem('ticket__id', this.ticket._id)
        }
        resolve(true);
      } catch (e) {
        reject(e);
      }
    })
  }

  public add(config: any) {
    this.gateway = {
      ...this.gateway,
      [config.gateway]: io(`${config.host}/${config.gateway}`, {
        auth: {
          ticket: this.ticket
        }
      })
    }
  }
}

import { EventErmitter } from 'events'
import { io } from 'socket.io-client'
import axios from 'axios';
import { Auth } from './auth';

const isBrowser: Function = () => {
  try {
    if (window) return true;
  } catch (e) {
    return false;
  }
};

const isNode: Function = () => {
  try {
    if (global) return true;
  } catch (e) {
    return false;
  }
};

export class Session extends EventErmitter {
  public ticket: any = null;
  public config: any = null;
  public gateway: any = {}; // Interfaces
  public controller: any = {}; // Interfaces

  constructor(config?: any) {
    this.config = config || {}
  }

  public init(config?: any) { // Make it multi sessionable
    this.config = config || this.config || {};

    if (isBrowser() && localStorage && localStorage.getItem(`${this.config.host}_ticket_token`)) {
      this.ticket = {
        token: localStorage.getItem(`${this.config.host}_ticket_token`),
        expiresAt: localStorage.getItem(`${this.config.host}_ticket_expiresAt`),
        ip: localStorage.getItem(`${this.config.host}_ticket_ip`),
        user: localStorage.getItem(`${this.config.host}_ticket_user`),
        _id: localStorage.getItem(`${this.config.host}_ticket__id`)
      }
    }
  }

  public async login(credentials: any) { // TODO Creds Interface
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const auth: any = new Auth({
          host: this.config.host,
          gateway: this.config.gateway
        })

        this.ticket = await auth.login(credentials)

        if (isBrowser() && localStorage) {
          localStorage.setItem(`${this.config.host}_ticket_token`, this.ticket.token)
          localStorage.setItem(`${this.config.host}_ticket_expiresAt`, this.ticket.expiresAt)
          localStorage.setItem(`${this.config.host}_ticket_ip`, this.ticket.ip)
          localStorage.setItem(`${this.config.host}_ticket_user`, this.ticket.user)
          localStorage.setItem(`${this.config.host}_ticket__id`, this.ticket._id)
        }

        resolve(true);
      } catch (e) {
        reject(e);
      }
    })
  }

  // TODO Logout

  public add(config: any) {
    const host = config.host || this.config.host

    if (config.gateway) {
      this.gateway[config.gateway] = io(`${host}/${config.gateway}`, {
        auth: {
          ticket: this.ticket
        }
      })

      this.gateway[config.gateway].on('connected', (res: any) this.emit('success'))
      this.gateway[config.gateway].on('error', (err: any) this.emit('error', err))
      this.gateway[config.gateway].on('connect_error', (err: any) this.emit('error', err))
    }

    if (config.controller) {
      this.controller[config.controller] = axios.create({
        baseURL: `${this.config.host}/${config.controller}`,
        auth: {
          ticket: this.ticket
        }
      })
    }
  }
}

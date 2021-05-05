import { EventErmitter } from 'events'
import { io } from 'socket.io-client'
import axios from 'axios';
import { Auth } from './auth';
import { Connection } from './connection';

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

Array.prototype.post = (obj: any) => {
  this.push(obj)
}

Array.prototype.update = (obj: any) => {
  const arr = docs.map((obj: any) => (obj._id === data._id) ? obj = data : obj))
  this = arr;
}

Array.prototype.remove = (id: string) => {
  const filtered: any = this.filter((d: any) => d._id != id);
  this.feed = filtered;
}

export class Session extends EventErmitter {
  public ticket: any = {};
  public config: any = {};
  public connection: any = {};

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
    const gateway = config.gateway || config.name
    const controller = config.controller || config.name

    this.connection[config.name || config.gateway || config.controller] = new Connection({
      ticket: this.ticket,
      host: config.host,
      gateway,
      controller
    })
  }
}

import { EventEmitter } from 'events'
import { io } from 'socket.io-client'
import axios from 'axios';
import { isBrowser } from '@enjine/utils';
import { Auth } from './auth';
import { Connection } from './connection';

export class Session extends EventEmitter {
  public ticket: any = {};
  public config: any = {};
  public connection: any = {};

  constructor(config?: any) {
    super()
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

        resolve(this.ticket);
      } catch (e) {
        this.emit('error', e)
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

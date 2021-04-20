import { io } from 'socket.io-client'
// import { axios } from 'axios'; // TODO Controller Integration
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

export class Session { // TODO Exent EventErmitter or SocketIO Manager
  public ticket: any = null;
  public config: any = null;
  public gateway: any = {}; // Interfaces
  public controller: any = {}; // Interfaces

  constructor(config: any) {
    this.config = config
  }

  public async init() { // Make it multi sessionable
    return new Promise(async (resolve: any, reject: any) => {

      if (isBrowser() && localStorage && localStorage.getItem(`${this.config.host}_ticket_token`)) {
        try {
          this.ticket = {
            token: localStorage.getItem(`${this.config.host}_ticket_token`),
            expiresAt: localStorage.getItem(`${this.config.host}_ticket_expiresAt`),
            ip: localStorage.getItem(`${this.config.host}_ticket_ip`),
            user: localStorage.getItem(`${this.config.host}_ticket_user`),
            _id: localStorage.getItem(`${this.config.host}_ticket__id`)
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
    }

    if (config.controller) {
      this.controller[config.controller] = config.controller // TODO Implement axios
    }
  }
  // TODO Add RESTful API
  // public post() {
  //
  // }
  //
  // public put() {
  //
  // }
  //
  // public get() {
  //
  // }
  //
  // public delete() {
  //
  // }
}

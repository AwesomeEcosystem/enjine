import { EventErmitter } from 'events'
import { io } from 'socket.io-client'
import axios from 'axios';

export default class Connection extends EventErmitter {
  ticket: any;
  config: any;
  gateway: any;
  controller: any;

  constructor(config: any) {
    this.config = config
    this.init(config)
  }

  public init(config: any) {
    try {
      this.ticket = config.ticket || null;

      const host: string = config.ticket.host || config.host || null;

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
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public all() {
    try {
      let data: any [] = [];

      if (this.gateway) {
        this.gateway.emit('all', (res: any[]) => data = res);
      } else if (!this.gateway && this.controller) {
        this.controller.get('/', (res: any[]) => data = res);
      };

      return this.feed = data;
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public get(id: string) {
    try {
      let data: any = {};

      if (this.gateway) {
        this.gateway.emit('get', id, (res: any) => data = res);
      } else if (!this.gateway && this.controller) {
        this.controller.get(`/${id}`, (res: any) => data = res);
      }

      return data;
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public post(data: any) {
    try {
      if (this.gateway) {
        this.gateway.emit('post', data);
      } else if (!this.gateway && this.controller) {
        this.controller.post('/', data);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public put(data: any) {
    try {
      if (this.gateway) {
        this.gateway.emit('update', data);
      } else if (!this.gateway && this.controller) {
        this.controller.put(`/${data._id}`, data);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public update(data: any) {
    try {
      this.put(data)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public remove(id: string) {
    try {
      if (this.gateway) {
        this.gateway.emit('remove', id);
      } else if (!this.gateway && this.controller) {
        this.controller.remove(`/${id}`);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public rem(id: string) {
    try {
      this.remove(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public delete(id: string) {
    try {
      this.rem(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public del(id: string) {
    try {
      this.rem(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }
}

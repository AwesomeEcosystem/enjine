import { EventEmitter } from 'events'
import { io } from 'socket.io-client'
import axios from 'axios';

export class Connection extends EventEmitter {
  ticket: any;
  config: any;
  gateway: any;
  controller: any;
  feed: any;

  constructor(config: any) {
    super()
    this.config = config
    this.init(config)
  }

  public async init(config: any) {
    try {
      this.ticket = config.ticket || null;

      const host: string = config.ticket.host || config.host || null;

      if (config.gateway) {
        this.gateway[config.gateway] = io(`${host}/${config.gateway}`, {
          // auth: {
          //   ticket: this.ticket
          // }
        })

        this.gateway[config.gateway].on('connected', (res: any) => this.emit('success'))
        this.gateway[config.gateway].on('error', (err: any) => this.emit('error', err))
        this.gateway[config.gateway].on('connect_error', (err: any) => this.emit('error', err))
      }

      if (config.controller) {
        this.controller[config.controller] = axios.create({
          baseURL: `${this.config.host}/${config.controller}`,
          // auth:{
          //   ticket: this.ticket
          // }
        })
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async all() {
    try {
      let data: any [] = [];

      if (this.gateway) {
        this.gateway.emit('all', (res: any[]) => data = res);
      } else if (!this.gateway && this.controller) {
        data = await this.controller.get('/');
      };

      return this.feed = data;
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async get(id: string) {
    try {
      let data: any = {};

      if (this.gateway) {
        this.gateway.emit('get', id, (res: any) => data = res);
      } else if (!this.gateway && this.controller) {
        data = await this.controller.get(`/${id}`);
      }

      return data;
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async post(data: any) {
    try {
      if (this.gateway) {
        this.gateway.emit('post', data);
      } else if (!this.gateway && this.controller) {
        await this.controller.post('/', data);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async put(data: any) {
    try {
      if (this.gateway) {
        this.gateway.emit('update', data);
      } else if (!this.gateway && this.controller) {
        await this.controller.put(`/${data._id}`, data);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async update(data: any) {
    try {
      await this.put(data)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async remove(id: string) {
    try {
      if (this.gateway) {
        this.gateway.emit('remove', id);
      } else if (!this.gateway && this.controller) {
        await this.controller.remove(`/${id}`);
      }
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async rem(id: string) {
    try {
      await this.remove(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async delete(id: string) {
    try {
      await this.rem(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }

  public async del(id: string) {
    try {
      await this.rem(id)
    } catch (e) {
      this.emit('error', e)
      throw new Error(e);
    }
  }
}

import { EventEmitter } from 'events'

export class Core extends EventEmitter {
  name: string;
  
  constructor(parameters) {
    super()
  }
}

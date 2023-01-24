import EventEmitter from 'events'
import { AsyncConstructor } from 'async-constructor'

export default class Container extends AsyncConstructor {
  initialized: boolean = false
  constructor(config?: object) {
    super(async () => {
      this.emit('initialized')
    })

    this.on('initialized', () => {
      this.initialized = true
    })

    this.on('error', (err) => {
      console.log(err);
    })
  }

  on(event: string, payload: any) {
    this.events.on(event, payload)
  }

  emit(event: string, data?: any) {
    this.events.emit(event, data || undefined)
  }
}

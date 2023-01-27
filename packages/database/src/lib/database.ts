import Levelts from 'level-ts';
import { mkdir } from '@enjine/utils'

export class Database extends Levelts {
  name: string
  encryption: boolean = false

  constructor(name: string, encrypt?: boolean) {
    mkdir(name)
    super(name)

    this.name = name
    if (encrypt) {
      this.encryption = true
    }
  }
  
  async fetch(): Promise<any> {
    return await this.all()
  }

  async fetchAll(): Promise<any> {
    return await this.all()
  }

  async getAll(): Promise<any> {
    return await this.all()
  }

  async post(data: any): Promise<any> {
    return await this.put(data._id, data)
  }

  async remove(id: string) {
    return await this.del(id)
  }
}

import Levelts from 'level-ts';
import { mkdir } from '@enjine/utils'

export class Database extends Levelts {
  name: string;

  constructor(name: string) {
    mkdir(name)
    super(name)
    this.name = name;
  }
  async fetch(): Promise<any> {
    return await this.all();
  }

  async post(data: any): Promise<any> {
    return await this.put(data._id, data);
  }

  async remove(id: string) {
    return await this.del(id);
  }
}

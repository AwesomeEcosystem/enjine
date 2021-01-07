import Levelts from 'level-ts';
import { mkdir } from '@scale/utils'

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
    return await this.put(data.id, data);
  }

  async remove(id) {
    return await this.del(id);
  }
}

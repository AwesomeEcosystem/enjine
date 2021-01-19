import { Model } from '@scale/database';
import { createCrypto } from '@scale/utils';

export class User extends Model {
  username: string;
  password: any; // TODO Password Interface

  constructor(username: any) {
    super('user' + '=' + username)
    this.username = username
  }

  async init(password: string) {
    this.password = await createCrypto(password)
  }
}

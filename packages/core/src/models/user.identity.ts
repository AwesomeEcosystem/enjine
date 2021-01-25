import { Identity } from '@scale/database';
import { createCrypto } from '@scale/utils';

export class User extends Identity {
  username: string;

  constructor(data: any) {
    super({
      prefix: 'user' + '=' + data.username,
      password: data.password
    })
    this.username = data.username
  }
}

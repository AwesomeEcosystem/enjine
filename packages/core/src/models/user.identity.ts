import { Identity } from '@ecosis/database';
import { createCrypto } from '@ecosis/utils';

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

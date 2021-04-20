import { Identity } from '@enjine/database';
import { createCrypto } from '@enjine/utils';

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

import { Identity } from '@scale/database';

export class Bot extends Identity {
  username: string;

  constructor(data: any) {
    super({
      prefix: 'user' + '=' + data.username,
      password: data.password
    })
    this.username = data.username
  }
}

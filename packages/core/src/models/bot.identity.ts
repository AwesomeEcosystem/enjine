import { Identity } from '@ecosis/database';

export class Bot extends Identity {
  username: string;

  constructor(data: any) {
    super({
      prefix: 'bot' + '=' + data.username,
      password: data.password
    })
    this.username = data.username
  }
}

import { Identity } from '@ecosis/database';

export class InstanceIdentity extends Identity {
  username: string;

  constructor(data: any) {
    super({
      prefix: 'instance' + '=' + data.username,
      password: data.password
    })
    this.username = data.username
  }
}

import { Model } from '@scale/database';

// TODO Transform Group into extended Identity

export class Profile extends Model {
  user: string; // User ID
  data: any;

  constructor(user: string, data: any) {
    super('organization')
    this.user = user;
    this.data = data;
  }
}

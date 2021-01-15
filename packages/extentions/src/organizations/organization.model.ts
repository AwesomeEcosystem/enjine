import { Model } from '@scale/database';

// TODO Transform Group into extended Identity

export class Organization extends Model {
  name: string;

  constructor(name) {
    super('organization')
    this.name = name;
  }
}

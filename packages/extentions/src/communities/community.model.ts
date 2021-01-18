import { Model } from '@scale/database';

// TODO Transform Group into extended Identity

export class Community extends Model {
  name: string;

  constructor(name) {
    super('community')
    this.name = name;
  }
}

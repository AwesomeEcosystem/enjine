import { Model } from '@scale/database';

// TODO Transform Group into extended Identity

export class Group extends Model {
  name: string;

  constructor(name) {
    super('group')
    this.name = name;
  }
}

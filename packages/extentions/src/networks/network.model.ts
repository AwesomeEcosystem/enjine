import { Model } from '@scale/database';

// TODO Transform Group into extended Identity

export class Network extends Model {
  name: string;

  constructor(name) {
    super('network')
    this.name = name;
  }
}

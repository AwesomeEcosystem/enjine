import { Gateway } from '@scale/core';
import * as endpoints from './posts.endpoints';

export class PostGateway extends Gateway {
  constructor() {
    super('posts', endpoints)
  }
}

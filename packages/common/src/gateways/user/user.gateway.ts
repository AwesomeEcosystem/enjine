import { Gateway } from '@scale/core';
import * as endpoints from './user.endpoints';

export class UserGateway extends Gateway {
  constructor() {
    super('user', endpoints)
  }
}

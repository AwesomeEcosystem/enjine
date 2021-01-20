import { Gateway, authMiddleware } from '@scale/core';
import * as endpoints from './user.endpoints';

export class UserGateway extends Gateway {
  constructor(db: any) {
    super('user', db, endpoints)
  }
}

import { Gateway, authMiddleware } from '@scale/core';
import { endpoints } from './user.endpoints';

export class UserGateway extends Gateway {
  constructor(db: any) {
    super('user', db, endpoints)
  }
}

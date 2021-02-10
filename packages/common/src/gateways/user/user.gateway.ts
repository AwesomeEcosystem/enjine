import { Gateway, authMiddleware } from '@ecosis/core';
import { endpoints } from './user.endpoints';

export class UserGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, db, endpoints)
  }
}

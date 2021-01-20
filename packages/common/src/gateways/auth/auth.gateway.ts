import { Gateway } from '@scale/core';
import { endpoints } from './auth.endpoints';

export class AuthGateway extends Gateway {
  constructor(db: any) {
    super('auth', db, endpoints)
  }
}

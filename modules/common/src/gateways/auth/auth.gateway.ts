import { Gateway } from '@enjine/core';
import { endpoints } from './auth.endpoints';

export class AuthGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, endpoints, db)
  }
}

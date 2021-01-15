import { Gateway } from '@scale/core';
import * as endpoints from './auth.endpoints';

export class AuthGateway extends Gateway {
  constructor() {
    super('auth', endpoints)
  }
}

import { Gateway } from '@scale/core';
import { login, auth } from './auth.endpoints';

export class AuthGateway extends Gateway {
  constructor() {
    const endpoints = [ login, auth ]

    super('auth', endpoints)
  }
}

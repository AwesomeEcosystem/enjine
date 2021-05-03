import { Gateway } from '@enjine/core';
import { endpoints } from './auth.endpoints';

export class AuthGateway extends Gateway {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

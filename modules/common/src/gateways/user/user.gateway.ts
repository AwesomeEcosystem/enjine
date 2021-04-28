import { Gateway, authMiddleware } from '@enjine/core';
import { endpoints } from './user.endpoints';

export class UserGateway extends Gateway {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

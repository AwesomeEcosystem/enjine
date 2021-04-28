import { Gateway, authMiddleware } from '@enjine/core';
import { endpoints } from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

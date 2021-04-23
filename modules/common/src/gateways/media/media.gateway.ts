import { Gateway, authMiddleware } from '@enjine/core';
import { endpoints } from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, endpoints, db)
  }
}

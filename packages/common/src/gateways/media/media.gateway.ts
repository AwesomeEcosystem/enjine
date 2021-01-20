import { Gateway, authMiddleware } from '@scale/core';
import { endpoints } from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor(db: any) {
    super('media', db, endpoints)
  }
}

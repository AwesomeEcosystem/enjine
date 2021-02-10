import { Gateway, authMiddleware } from '@ecosis/core';
import { endpoints } from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, db, endpoints)
  }
}

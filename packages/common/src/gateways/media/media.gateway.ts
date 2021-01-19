import { Gateway, authMiddleware } from '@scale/core';
import * as endpoints from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor() {
    super('media', endpoints)
  }
}

import { Gateway } from '@scale/core';
import { upload, stream } from './media.endpoints';

export class MediaGateway extends Gateway {
  constructor() {
    const endpoints = [ upload, stream ]
    super('media', endpoints)
  }
}

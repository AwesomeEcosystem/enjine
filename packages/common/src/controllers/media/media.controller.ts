import { Controller } from '@enjine/core';
import { endpoints } from './media.endpoints';

export class MediaController extends Controller {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

import { Controller } from '@enjine/core';
import { endpoints } from './data.endpoints';

export class DataController extends Controller {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

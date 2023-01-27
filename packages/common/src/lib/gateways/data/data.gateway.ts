import { Gateway } from '@enjine/core';
import { endpoints } from './data.endpoints';

export class DataGateway extends Gateway {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

import { Gateway, authMiddleware } from '@enjine/core';
import { endpoints } from './data.endpoints';

export class DataGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, endpoints, db)
  }
}

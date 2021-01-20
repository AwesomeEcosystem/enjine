import { Gateway, authMiddleware } from '@scale/core';
import * as endpoints from './data.endpoints';

export class DataGateway extends Gateway {
  constructor(db: any) {
    super('data', db, endpoints)
  }
}

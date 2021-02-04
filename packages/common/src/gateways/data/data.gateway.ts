import { Gateway, authMiddleware } from '@scale/core';
import { endpoints } from './data.endpoints';

export class DataGateway extends Gateway {
  constructor(name: any, db: any) {
    super(name, db, endpoints)
  }
}

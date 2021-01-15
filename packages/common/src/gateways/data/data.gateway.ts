import { Gateway } from '@scale/core';
import * as endpoints from './data.endpoints';

export class DataGateway extends Gateway {
  constructor() {
    super('data', endpoints)
  }
}

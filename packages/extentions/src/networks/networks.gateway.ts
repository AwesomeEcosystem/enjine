import { Gateway } from '@scale/core';
import * as endpoints from './networks.endpoints';

export class NetworksGateway extends Gateway {
  constructor() {
    super('networks', endpoints)
  }
}

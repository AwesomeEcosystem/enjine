import { Gateway } from '@scale/core';
import * as endpoints from './communities.endpoints';

export class CommunitiesGateway extends Gateway {
  constructor() {
    super('communities', endpoints)
  }
}

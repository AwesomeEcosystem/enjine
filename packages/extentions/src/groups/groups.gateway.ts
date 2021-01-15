import { Gateway } from '@scale/core';
import * as endpoints from './groups.endpoints';

export class GroupsGateway extends Gateway {
  constructor() {
    super('groups', endpoints)
  }
}

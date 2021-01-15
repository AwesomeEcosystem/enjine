import { Gateway } from '@scale/core';
import * as endpoints from './organizations.endpoints';

export class OrganizationsGateway extends Gateway {
  constructor() {
    super('organization', endpoints)
  }
}

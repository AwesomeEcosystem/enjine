import { Gateway } from '@scale/core';
import * as endpoints from './profiles.endpoints';

export class ProfilesGateway extends Gateway {
  constructor() {
    super('profiles', endpoints)
  }
}

import { Gateway } from '@scale/core';
import * as endpoints from './messages.endpoints';

export class MessagesGateway extends Gateway {
  constructor() {
    super('messages', endpoints)
  }
}

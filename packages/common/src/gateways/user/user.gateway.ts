import { Gateway } from '@scale/core';
import { post, update, get, find, filter, remove } from './user.endpoints';

export class UserGateway extends Gateway {
  constructor() {
    const endpoints = [ post, update, get, find, filter, remove ]
    super('user', endpoints)
  }
}

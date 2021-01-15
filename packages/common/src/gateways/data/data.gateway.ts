import { Gateway } from '@scale/core';
import { post, update, get, find, filter, remove } from './data.endpoints';

export class DataGateway extends Gateway {
  constructor() {
    const endpoints = [ post, update, get, find, filter, remove ]
    super('data', endpoints)
  }
}

import { Controller } from '@enjine/core';
import { endpoints } from './data.endpoints';

export class DataController extends Controller {
  constructor(name: any, db: any) {
    super(name, db, endpoints)
  }
}

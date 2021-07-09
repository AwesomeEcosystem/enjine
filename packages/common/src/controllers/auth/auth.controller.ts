import { Controller } from '@enjine/core';
import { endpoints } from './auth.endpoints';

export class AuthController extends Controller {
  constructor(config: any) {
    super(config.name, endpoints, config.db)
  }
}

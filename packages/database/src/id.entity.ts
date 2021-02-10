import { appendAsyncConstructor } from 'async-constructor'
import { createCrypto } from '@ecosis/utils';
import { Model } from './model';

export class Identity extends Model {
  password: any; // TODO Password Interface

  constructor(data: any) {
    (data.prefix) ? super(data.prefix) : super('');

    appendAsyncConstructor(this, async () => {
      this.password = await createCrypto(data.password)
    })
  }
}

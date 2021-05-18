import { appendAsyncConstructor } from 'async-constructor'
import { createCrypto } from '@enjine/utils';
import { Data } from './data';

export class Identity extends Data {
  password: any; // TODO Password Interface

  constructor(data: any) {
    (data.prefix) ? super(data.prefix) : super('');

    appendAsyncConstructor(this, async () => {
      this.password = await createCrypto(data.password)
    })
  }
}

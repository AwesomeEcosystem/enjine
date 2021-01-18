import { Model } from './model';
import { createCrypto } from '@scale/utils';

export class Identity extends Model {
  password: any;

  constructor(data: any) {
    (data.prefix) ? super(data.prefix) : super('');
    
    (async () => {
      this.password = await createCrypto(data.password)
    })()
  }
}

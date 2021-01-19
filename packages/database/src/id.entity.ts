import { Model } from './model';
import { createCrypto } from '@scale/utils';

export class Identity extends Model {
  instance: any;
  password: string;

  constructor(data: any) {
    (data.prefix) ? super(data.prefix) : super('');

    this.instance = (async () => {
      return await createCrypto(data.password)
    })()
  }

  get ready(): Promise<any> {
    return this.instance.then((instance: any) => {
      this.password = instance.password; // store the result
      return this; // this is what makes the one-liner possible!
    });
  }
}

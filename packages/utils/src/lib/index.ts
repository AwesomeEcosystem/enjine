import { createCrypto, compareCrypto, encrypt, decrypt } from './crypto';
import { serialize, deserialize, generateKey } from './helpers'
import { isEmptyObject } from './isEmptyObject';
import { validateEnv } from './validateEnv';
import { mkdir } from './dirManagement'

export default class Utils {
  public createCrypto = createCrypto;
  public compareCrypto = compareCrypto;
  public encrypt = encrypt;
  public decrypt = decrypt;
  public serialize = serialize;
  public deserialize = deserialize;
  public generateKey = generateKey;
  public isEmptyObject = isEmptyObject;
  public validateEnv = validateEnv;
  public mkdir = mkdir;
}

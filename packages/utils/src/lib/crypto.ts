import bcrypt from 'bcrypt';
import * as encrypter from 'crypto';

export async function createCrypto(data: string) {
  const salt: string = await bcrypt.genSalt();
  const hash: string = await bcrypt.hash(data, salt);
  return {
    salt,
    hash
  }
}

export async function compareCrypto(data: string, hash: string) {
  return await bcrypt.compare(data, hash);
}

export function encrypt(data: string, key: string): any {
  const cipher = encrypter.createCipher('aes-256-cbc', key)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export function decrypt(data: string, key: string): any {
  const decipher = encrypter.createDecipher('aes-256-cbc', key)
  let decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

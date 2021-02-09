import bcrypt from 'bcrypt';

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

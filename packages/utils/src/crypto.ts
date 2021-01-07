import * as bcrypt from 'bcrypt';

export async function crypto(data: string) {
  const salt: string = await bcrypt.genSalt();
  const hash: string = await bcrypt.hash(data, salt);
  return {
    salt,
    hash
  }
}

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Exception } from '../exceptions/exception';
import { Manager} from '@scale/database'; // TODO Root Database
import { compareCrypto } from '@scale/utils';

const manager = new Manager('.database')

export class AuthService {
  public users = manager.create('users');
  public sessions = manager.create('sessions');

  public async login(credentials: any, ip: any) { // TODO Interfaces
    const user: any = this.users.find((u: any) => u.username === credentials.username)
    if (!user) {
      throw new Exception(401, 'Username or Password is incorrect');
    }
    const matched = await compareCrypto(credentials.password, user.password.hash)
    if (!matched) {
      throw new Exception(401, 'Username or Password is incorrect');
    }
    return await this.createSessionToken(user, ip)
  }

  public async createSessionToken(user: any, ip: string) { // TODO User Interface
    const now = new Date().getTime();
    const token = await bcrypt.hash(`${user._id}_${user.username}_${ip}_${now}`, 10);
    const expiresAt = now + (2 * 60 * 1000);
    const authToken = await this.sessions.post({
      token,
      expiresAt,
      ip,
      _id: user._id + '=' + ip
    });
    return authToken;
  }

  public async validateToken(token: string, user_id: string, ip: string) {
    const authToken: any = await this.sessions.find((auth: any) => { // TODO AuthToken Interface
      return auth.token === auth.token && auth._id === user_id + '=' + ip && auth.ip === ip && auth.expiresAt > new Date().getTime(); // TODO Use Iteration
    });
    if (!authToken) {
      console.log('Token not found', token)
      throw new Error('Token not found');
    }
    return this.users.get(authToken.user_id);
  }

  public createToken(user: any): any { // TODO User Interface, TokenData,
    const dataStoredInToken = { _id: user._id, username: user.username }; // TODO dataStoredInTokenInterface
    const secret: string = process.env.JWT_SECRET;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
  }

  public createCookie(tokenData: any): string { // TODO TokenData Interface
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

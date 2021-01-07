import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DataStoredInToken, TokenData, SessionTokenData } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
import manager from '../database'; // TODO Root Database

export default class AuthService {
  public users = manager.create('users');
  public authToken = manager.create('sessions');

  public async createSessionToken(user: User, ip: string){
    const now = new Date().getTime();
    const token = await bcrypt.hash(`${user._id}_${user.emails[0]}_${ip}_${now}`, 10);
    const expiresAt = now + (2 * 60 * 1000);
    const authToken: SessionTokenData = await this.authToken.post({
      token,
      expiresAt,
      ip,
      _id: user._id + '=' + ip
    });
    return authToken;
  }

  public async validateToken(token: string, userid: string, ip: string) {
    const authToken: SessionTokenData = await this.authToken.find((auth: any) => {
      return auth.token === token && auth._id === userid + '=' + ip && auth.ip === ip && auth.expiresAt > new Date().getTime(); // TODO Use Iteration
    });
    // const authToken: SessionTokenData = await this.authToken.findOne({ token: token, userId: userid, ip: ip, expiresAt: { $gt: (new Date()).getTime()} })
    if (!authToken) {
      console.log('Token not found', token)
      throw new Error('Token not found');
    }
    return this.users.get(authToken.userId);
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id, email: user.emails[0] };
    const secret: string = process.env.JWT_SECRET;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: jwt.sign(dataStoredInToken, secret, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

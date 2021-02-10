import bcrypt from 'bcrypt';
import { Manager } from '@ecosis/database';
import { User } from '../models/user.identity';
import { Exception } from '../exceptions/exception';

const manager = new Manager('.database')

export default class UserService {
  public users = manager.create('user');

  public async all(): Promise<any[]> {
    const users: any[] = await this.users.all();
    return users;
  }

  public async get(userId: string): Promise<any> {
    const findUser: any = await this.users.get(userId);
    if (!findUser) throw new Exception(409, 'Can not find User');
    return findUser;
  }

  public async create(userData: any) { // TODO User Interface
    if (!userData.username && !userData.password) {
      throw new Exception(409, 'Username and Password are need for Registration!')
    }
    const user = await new User(userData)
    return this.users.post(user)
  }

  public async remove(userId: string): Promise<any> {
    const deleteUserById: any = await this.users.del(userId);
    if (!deleteUserById) throw new Exception(409, 'Can not find User');

    return deleteUserById;
  }
}

import bcrypt from 'bcrypt';
import CreateUserDto from '../dtos/users.dto';
import HttpException from '../exceptions/HttpException';
import { User } from '../interfaces/users.interface';
import { isEmptyObject } from '@scale/utils';
import manager from '../database'; // TODO Root Database

export default class UserService {
  public users = manager.create('users');

  public async all(): Promise<User[]> {
    const users: User[] = await this.users.all();
    return users;
  }

  public async get(userId: string): Promise<User> {
    const findUser: User = await this.users.get(userId);
    if (!findUser) throw new HttpException(409, 'Can not find User');

    return findUser;
  }

  public async remove(userId: string): Promise<User> {
    const deleteUserById: any = await this.users.del(userId);
    if (!deleteUserById) throw new HttpException(409, 'Can not find User');

    return deleteUserById;
  }
}

import { NextFunction, Request, Response } from 'express';
import CreateUserDto from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
import UsersService from '../services/users.service';

export default class UsersController {
  public usersService = new UsersService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsers: User[] = await this.usersService.all();
      res.status(200).json({ data: allUsers, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const getUser: User = await this.usersService.get(userId);
      res.status(200).json({ data: getUser, message: 'getUser' });
    } catch (error) {
      next(error);
    }
  }

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.params.id;

    try {
      const removeUser: User = await this.usersService.remove(userId);
      res.status(200).json({ data: removeUser, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
}

import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Route from '../interfaces/routes.interface';

export default class UsersRoute implements Route {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser); // TODO Middleware?
  }
}

import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

export default class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/sessionToken`, authMiddleware, this.authController.sessionToken);
  }
}

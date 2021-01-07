import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/auth.service';
import { User } from '../interfaces/users.interface';
import { RequestWithUser, SessionTokenData } from '../interfaces/auth.interface';

export default class AuthController {
  public authService = new AuthService();

  public sessionToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userData: User = req.user;
    try {
      const sessionToken: SessionTokenData = await this.authService.createSessionToken(userData, req.ip);
      res.status(200).json(sessionToken);
    } catch (error) {
      next(error);
    }
  }
}

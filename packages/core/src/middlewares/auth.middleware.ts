import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '../interfaces/auth.interface';
import manager from '../database'; // TODO Root Database

export default async function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
  const users = manager.create('users');
  // const cookies = req.cookies;
  const headers = req.headers;

  const authHeader = headers.authorization;

  if (authHeader) {
    let parts = authHeader.split(' ');
    const jwtToken = parts[1];
    console.log(headers);
    const secret = process.env.JWT_SECRET;

    try {
      console.log(jwtToken);
      console.log(secret);


      const verificationResponse = jwt.verify(jwtToken, secret) as DataStoredInToken;
      const userId = verificationResponse._id;
      const findUser = await users.get(userId);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, '1 Wrong authentication token'));
      }
    } catch (error) {
      console.log(error);
      next(new HttpException(401, '2 Wrong authentication token'));
    }
  } else {
    next(new HttpException(404, '3 Authentication token missing'));
  }
}

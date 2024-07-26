import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ThrowReturn } from '../utils/throwReturn';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw new ThrowReturn('No token provided');
  }

  try {
    const data =`CmTxFbcFjo0DkIUJMrVeLvfVQ0Ol1mu4`
    console.log("process.env.JWT_SECRET",process.env.JWT_SECRET);
    const decoded = jwt.verify(token, data as string);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ThrowReturn('Failed to authenticate token');
  }
};

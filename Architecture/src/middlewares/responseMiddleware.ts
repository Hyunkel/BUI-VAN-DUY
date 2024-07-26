import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    export interface Response {
      sendData: (data: any) => void;
    }
  }
}

export const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.sendData = (data: any) => {
    res.status(200).json({ message: 'Success', data });
  };
  next();
};

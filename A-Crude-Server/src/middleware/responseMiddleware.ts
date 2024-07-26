import { Request, Response, NextFunction } from 'express';

// Mở rộng kiểu Response của Express
declare global {
  namespace Express {
    interface Response {
      sendData: (data: any) => void;
    }
  }
}

export const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.sendData = (data: any) => {
    res.status(200).json({ data });
  };
  next(); // Cần gọi next() để tiếp tục đến các middleware tiếp theo nếu sử dụng
};

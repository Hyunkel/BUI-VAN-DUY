import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { ThrowReturn } from '../utils/throwReturn';

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ThrowReturn) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    logger.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

import { Request, Response, NextFunction } from 'express';
import { updateScoreService } from '../services/scoreService';
import { ThrowReturn } from '../utils/throwReturn';

export const updateScore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, score } = req.body;
    if (!userId || typeof score !== 'number') {
      throw new ThrowReturn('Invalid input data');
    }

    const newScore = await updateScoreService(userId, score);
    res.sendData({ userId, newScore });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    next(new ThrowReturn(errorMessage));
  }
};

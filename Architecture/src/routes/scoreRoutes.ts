import { Router } from 'express';
import { updateScore } from '../controllers/scoreController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/update-score', authMiddleware, updateScore);

export default router;

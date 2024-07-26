import { Router } from 'express';
import { generateToken } from '../controllers/authController';

const router = Router();

// Route để sinh token
router.post('/api/generate-token', generateToken);

export default router;

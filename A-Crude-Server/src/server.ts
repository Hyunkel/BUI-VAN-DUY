import express, { Request, Response, NextFunction } from 'express';
import { connectDB } from './config/databaseConfig';
import { responseMiddleware } from './middleware/responseMiddleware';
import logger from './utils/logger';
import { ThrowReturn } from './utils/errorUtils';
import recordRouter from './controllers/recordController'; // Import router
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(responseMiddleware);

app.use('/api', recordRouter); // Sử dụng router
// Middleware xử lý lỗi
app.use((err: Error | ThrowReturn, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ThrowReturn) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    logger.error(err.message); // Đảm bảo rằng err.message là hợp lệ
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
});

import express from 'express';
import bodyParser from 'body-parser';
import scoreRoutes from './routes/scoreRoutes';
import { log4jsMiddleware, logger } from './utils/logger';
import { responseMiddleware } from './middlewares/responseMiddleware';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import router from './routes';
import connectDB from './config/db';

const app = express();
connectDB();
app.use(express.json());
app.use(log4jsMiddleware);
app.use(bodyParser.json());
app.use(responseMiddleware);
app.use('/', router);
app.use('/api', scoreRoutes);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

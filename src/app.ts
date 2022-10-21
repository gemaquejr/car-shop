import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';

import Car from './routes/Car';

const app = express();
app.use(express.json());
app.use(Car);
app.use(errorHandler);

export default app;

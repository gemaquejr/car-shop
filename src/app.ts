import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';

import Car from './routes/Car';
import Motorcycle from './routes/Motorcycle';

const app = express();
app.use(express.json());
app.use(Car);
app.use(Motorcycle);
app.use(errorHandler);

export default app;

import 'express-async-errors';
import express from 'express';
import globalError from './helpers/globalError';

const app = express();
app.use(globalError);

export default app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { productsRouter } from './router/products.router.js';

export const app = express();

const corsOptions = {
  origin: '*',
};

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.disable('x-powered-by');

app.use('/products', productsRouter);

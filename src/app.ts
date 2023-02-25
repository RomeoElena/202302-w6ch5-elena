import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { productsRouter } from './router/products.router.js';

export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.use((_req, _resp, next) => {
  console.log('Hola Mundo');
  next();
});

app.use('/products', productsRouter);

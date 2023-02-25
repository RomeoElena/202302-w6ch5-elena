import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();
app.disable('x-powered-by');

const corsOptions = {
  origin: '*',
};

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

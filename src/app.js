import express, { json , urlencoded } from 'express';
import cors from 'cors';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';
import { api } from './routes';

export const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended: false}));

app.get('/', (req,res) => {
    res.status(200).json({message: 'App is working'})
});

app.use('/api',api)

app.use(ErrorMiddleware);
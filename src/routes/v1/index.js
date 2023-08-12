import { Router } from 'express';

export const api = Router();

api.get('/', (req,res) => res.status(200).json({message: 'Api working too'}));

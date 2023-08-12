import { set , connect } from 'mongoose';
import {} from 'dotenv/config';

const db = process.env.MONGODB;

set('strictQuery', false);

connect(db)
.then(() => console.log('Database connected'))
.catch(error => console.log(`Database connection failed with error: ${error}`));
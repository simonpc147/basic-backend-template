import { app } from './app';
import './services/mongo'
import {} from 'dotenv/config';

const port = process.env.PORT;

app.listen(port, err => {
    if(err) return console.log(`Server failed with error: ${err}`);

    console.log(`Server running at port: ${port}`);
});


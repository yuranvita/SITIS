import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';
import 'express-async-errors';
import path from 'path';
import './database/connections';
import cors from 'cors';
import "reflect-metadata";

dotenv.config();

const app = express();

app.use(cors({
  exposedHeaders : ['X-Total-Count']
}));
app.use(express.json());
app.use(routes);

//app.use('/uploads' , express.static(path.join(__dirname, '..','uploads')));



app.listen(process.env.PORT || 3333);

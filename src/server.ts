import * as  express from 'express';
import routes from './routes';
import 'express-async-errors';
import * as path from 'path';
import './database/connections';
import * as cors from 'cors';

const app = express();

app.use(cors({
  exposedHeaders : ['X-Total-Count']
}));
app.use(express.json());
app.use(routes);

app.use('/uploads' , express.static(path.join(__dirname, '..','uploads')));



app.listen(3333);

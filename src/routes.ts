import {Router} from 'express';
import multer from 'multer';
import uploadconfig from './config/upload';

import AttracationsController from './controllers/AttractionsController' ;
import RegionController from './/controllers/RegionController';
import MunicipalityController from './controllers/MunicipalityController';
import AttractionsCardController  from './controllers/AttractionsCardController';



import  { AuthenticationUserController } from './controllers/AuthenticationUserController';
import  { CreateUserController }  from './controllers/CreateUserController';
import  { ensureAuthenticated } from './middlewares/ensureAuthenticated';


import Controller from './controllers/Controller';
 
const authenticationController = new AuthenticationUserController();
const createUserController = new CreateUserController();




const routes = Router();
const upload = multer(uploadconfig);

//Rotas Gets
routes.get('/' , Controller.index);
routes.get('/attractions' , ensureAuthenticated, AttracationsController.index);
routes.get('/attractions/:id' , ensureAuthenticated, AttracationsController.show);
routes.get('/municipality', ensureAuthenticated, MunicipalityController.index);
routes.get('/cards/:page' , ensureAuthenticated, AttractionsCardController.index)


//Rotas Posts
routes.post('/session' , authenticationController.handle);
routes.post('/attractions',ensureAuthenticated, upload.array('images'),  AttracationsController.create);
routes.post('/region', RegionController.create);
routes.post('/municipality', MunicipalityController.create);
routes.post('/user' ,createUserController.handle )



export default routes;
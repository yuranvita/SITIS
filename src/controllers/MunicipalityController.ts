import {Request , response, Response} from 'express'; 
import { getRepository } from 'typeorm';
import Municipality from '../models/Municipality';
import municipalityView from '../views/municipalityView';


export default{
  async create(req : Request, res : Response) {

    const {
      name,
      population,
      climate,
      temperature,
      access,
      history,
      region_id
    }=req.body;
    

    const municipalityRepository = getRepository(Municipality);

    const data = {
      name,
      population,
      climate,
      temperature,
      access,
      history,
      region_id
    }


    const municipality = municipalityRepository.create(data);


    await municipalityRepository.save(municipality);

   

    return res.status(201).json({municipality});

  },
  
  async index(req : Request , res : Response){

    const municipalityRepository = getRepository(Municipality);

    const municipality = await  municipalityRepository.find();

    return res.json(municipalityView.renderMany(municipality));
  }

}
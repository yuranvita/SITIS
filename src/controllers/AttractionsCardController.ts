import {query, Request , Response} from 'express';
import { getRepository } from 'typeorm';
import Attractions from '../models/Attractions';
import attractionView from '../views/attractionView';


export default {
  async index(request : Request , response : Response ){

    const attractionRepository = getRepository(Attractions);

  
    const {page}  = request.params;
    const take = 5;
    const skip = (Number(page)-1)*take;
    const count = await attractionRepository.count();
    const totalPage = Math.floor(count/take);

    const attraction = await attractionRepository.find({relations : ["images"] , take : take , skip : skip })

    response.header('X-Total-Count', count.toString());
    response.header('offset', page);
    response.header('totalPages' , totalPage.toString());


    return response.json(attractionView.renderMany(attraction));

  }
}



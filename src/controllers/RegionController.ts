import { Request ,Response } from "express";
import { getRepository } from "typeorm";
import Region from '../models/Region' 


export default{
  async create(req : Request , res : Response) {
    const {
      name
    } = req.body;

    const regionRepository = getRepository(Region);
    

    const data = {
      name
    }

    const region = regionRepository.create(data);

    await regionRepository.save(region);
    
    return res.status(201).json({region});


  }
}
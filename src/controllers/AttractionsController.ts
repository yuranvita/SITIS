
import {Request , Response} from 'express';
import {getCustomRepository, getRepository} from 'typeorm';
import Attractions from '../models/Attractions';
import attractionView from '../views/attractionView';
import jwt from 'jsonwebtoken'


export default {
    async index (request : Request , response : Response){

        const attractionRepository = getRepository(Attractions);

        const attraction = await attractionRepository.find({relations : ['images']});

        

        return response.json(attractionView.renderMany(attraction))

    },
    async show (request : Request , response : Response){

        const {id} = request.params

        const attractionRepository = getRepository(Attractions);

        const attraction = await attractionRepository.findOne(id , {relations : ['images']} );
        
        console.log(attraction)

        return response.json(attraction);

    },
    async create (request : Request , response : Response){

        const {
            name,
            user_id,
            latitude,
            longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends,
            whatsapp,
            municipality_id
        } = request.body;

        

        const attractionRepository = getRepository(Attractions);

        const requestImages = request.files as Express.Multer.File[];
        
        // error no HEROKU migrar para AWS 
        // const images = requestImages.map(image => {
        //     return {path : image.filename}
        // });

        const data = {
            name,
            user_id,
            latitude,
            longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends : open_on_weekends === 'true',
            whatsapp,
            municipality_id,
            //images
        };

        const attraction = attractionRepository.create(data);
        
       
        
        try{
            await attractionRepository.save(attraction);
            return response.status(201).json({attraction});
        }catch ( err){
            return response.json({"alggo deu errado" : err});
        }


     


    }
}
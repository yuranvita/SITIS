
import {Request , Response} from 'express';
import {getRepository} from 'typeorm';
import Attractions from '../models/Attractions';
import attractionView from '../views/attractionView';
import  * as Yup from 'yup';



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

        // error no HEROKU migrar para AWS 
        // const requestImages = request.files as Express.Multer.File[];  
        // const images = requestImages.map(image => {
        //     return {path : image.filename}
        // });

        const data = {
            name,
            user_id,
            latitude : latitude,
            longitude : longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends : open_on_weekends === 'true',
            whatsapp ,
            municipality_id
           // images
        };

        const schema = Yup.object().shape({
            name : Yup.string().required("nome obrigatório"),
            user_id :  Yup.string().required("você precisa está logado"),
            latitude : Yup.number().required("latitude obrigatória"),
            longitude : Yup.number().required('longitude obrigatória'),
            about : Yup.string().max(300),
            instruction : Yup.string().max(300),
            opening_hours : Yup.string().required("horário obrigatório"),
            open_on_weekends : Yup.boolean(),
            whatsapp : Yup.number().optional(),
            municipality_id : Yup.string().required("cidade obrigatório")
        })

        await schema.validate(data , {
            abortEarly : false
        });


        const attraction = attractionRepository.create(data);
        
        console.log(attraction);
      
        try{
            await attractionRepository.save(attraction);

            return response.status(201).json({attraction});
        }
        catch (err){
            return response.json({err})
        }
           
    


    }
}
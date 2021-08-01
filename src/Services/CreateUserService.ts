import { UserRepositories } from "../repositories/UserRepositories";
import {getCustomRepository} from  'typeorm';
import {hash} from 'bcryptjs';


interface IUSerRequest{
  name : string;
  email : string;
  admin? : boolean;
  password : string;
}


class CreateUserService {

  async execute({name , email , admin = false, password} : IUSerRequest){
    const userRepositories = getCustomRepository(UserRepositories);


    if(!email){
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await userRepositories.findOne({
      email
    });

    if(userAlreadyExists){
      throw new Error("User already exists!");
    }
    
    const passwordHash = await hash(password , 8);

    const user = userRepositories.create({
      name,
      email,
      admin,
      password : passwordHash
    });


    await userRepositories.save(user);

    return user;
  }

}


export { CreateUserService }
import {getCustomRepository} from  'typeorm';
import {UserRepositories} from '../repositories/UserRepositories';


import { compare } from 'bcryptjs';
import {sign} from 'jsonwebtoken'

interface IAuthenticationRequest{
  email : string,
  password : string
}

class AuthenticationUserService{
  async execute({email , password} : IAuthenticationRequest){
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({email});

    if(!user){
      throw new Error("Email or Password incorrect!");
    }

    const passwordMatch = await compare (password , user.password);

    if (!passwordMatch){
      throw new Error("Email or Password incorrect!");
    }

    const token = sign(
      {
        email : user.email,
      },
      "2321312njn213bn2b32b3h213123j2bj32k1udfhldsfkgndfgjnfgsuasbjsdfb",
      {
        subject : user.id
      }
    )

    return token;
  }
}


export {AuthenticationUserService}
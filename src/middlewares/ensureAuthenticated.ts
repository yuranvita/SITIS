import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayLoad {
  sub : string;
}

export function ensureAuthenticated(req : Request , res : Response , next : NextFunction){
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }

  const [,token] = authToken.split(" ");

  try {
    const {sub} = verify(token , "2321312njn213bn2b32b3h213123j2bj32k1udfhldsfkgndfgjnfgsuasbjsdfb") as IPayLoad;
  
    return next();
  }catch (err){
    return res.status(401).end();
  }
}
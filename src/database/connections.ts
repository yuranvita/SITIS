
import {createConnection } from 'typeorm';



async  ()=> {
  await  createConnection({
    type : "postgres",
    url : process.env.DATABASE_URL
  });
};










import {createConnection } from 'typeorm';



createConnection({
  type :"postgres",
  host : "localhost",
  username : "postgres",
  cache:true,
  
});









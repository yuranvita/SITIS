console.log('process.env.DATABASE_URL' , process.env.DATABASE_URL);
module.exports = {

    "type" :"postgres",
    "url" : process.env.DATABASE_URL,   
    // "database": "./src/database/database.pg",
    "migrations": [
       "./build/database/migrations/*.ts"
   ],
   "entities":[
       "./build/models/*.ts"
   ],
   "cli" : {
       "migrationsDir" : 
        [ 
            "./src/database/migrations"
        ],
            "entitiesDir" : "./src/models"
   }
   
}
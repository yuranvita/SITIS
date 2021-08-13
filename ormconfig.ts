
//console.log(chalk.green(`${process.env.DATABASE_URL}`))
module.exports ={
    "type" :"postgres",
    "host" : process.env.DATABASE_HOST,
    "port" : process.env.DATABASE_PORT,
    //"url"  :  process.env.DATABASE_URL,
    "username" : process.env.DATABASE_USERNAME,
    "password" : process.env.DATABASE_PASSWORD,
    
    "database": process.env.DATABASE_NAME,
    

    "migrations": [
        "./dist/database/migrations/*.js"
    ],
    "entities":[
        "./dist/models/*.js"
    ],
    "cli" : {
        "migrationsDir" :  ["./src/database/migrations"],
        "entitiesDir" : "./src/models/*.ts"
    }
    
 }
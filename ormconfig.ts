
//console.log(chalk.green(`${process.env.DATABASE_URL}`))
module.exports ={
    "type" :"postgres",
    "url"  :  process.env.DATABASE_URL,
    //"database": "./src/database/database.sqlite",
    "migrations": [
        "./build/database/migrations/*.js"
    ],
    "entities":[
        "./build/models/*.js"
    ],
    "cli" : {
        "migrationsDir" :  ["./src/database/migrations"],
        "entitiesDir" : "./src/models/*.ts"
    }
    
 }
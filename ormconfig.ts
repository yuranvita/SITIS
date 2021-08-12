
//console.log(chalk.green(`${process.env.DATABASE_URL}`))
module.exports ={
    "type" :"postgres",
    "url"  :  process.env.DATABASE_URL,
    //"database": "./src/database/database.sqlite",
    "migrations": [
        "./build/database/migrations/*.ts"
    ],
    "entities":[
        "./build/models/*.ts"
    ],
    "cli" : {
        "migrationsDir" : "./src/database/migrations"
    }
    
 }
import dbConnection from "./src/connection/db.connection.js";
import app  from "./app.js"
import chalk from "chalk";
import dotenv from 'dotenv';
dotenv.config();

const Port =process.env.PORT || 4000


dbConnection().then(()=>{
    app.listen(Port, () => {
        console.log(chalk.blue(`Server running on port ${Port}`));
    });
 
}).catch(err=>{
    console.log(chalk.red(err));
    
})
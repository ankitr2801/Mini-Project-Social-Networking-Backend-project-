
import { ApplicationError } from "../../errorHandler/applicationError.js";


const errorHandler = (err,req,res,next)=>{
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message)
    } else {
        send("Something went wrong at the server, please try again later");
    }
    next();

};

export default errorHandler;
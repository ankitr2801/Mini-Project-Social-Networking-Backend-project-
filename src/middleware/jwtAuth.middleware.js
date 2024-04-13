
import jwt from "jsonwebtoken";

const jwtAuth = (req,res,next)=>{

    // 1. read token 

    const token  = req.headers["authorization"]

    //2.if token is not available return the error
    if(!token){
        return res.status(401).send('Unauthorized')
    }

    //3.check if token is valid
    try {
        const payload = jwt.verify(token,"mZARI5pZ6UYgxvwAwGmRdkssIe9MVsM2")
        console.log(payload);
        req.userID = payload.userid;
    } catch (err) {
         //4.return error 
        return res.status(401).send('Unauthorized')
    }
    //5. call the next.
        next();
}
export default jwtAuth;


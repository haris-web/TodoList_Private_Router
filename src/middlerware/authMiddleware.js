import jwt from "jsonwebtoken";
import responseMessage from "../customApiResponse/apiResponse.js";
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization
     const tokenSecret = token.split(" ")[1]
    if (!tokenSecret) return res.status(401).send(responseMessage.error("Access denied. No token provided."));
   try {
    const decoded = jwt.verify(tokenSecret,"12345687")
    req.userId = decoded;
    next();
   } catch (error) {
       return res.status(401).send(responseMessage.error("Unauthorized"));
 
   }
}

export default authenticateToken;
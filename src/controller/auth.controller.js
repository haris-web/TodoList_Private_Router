import responseMessage from "../customApiResponse/apiResponse.js"
import authenticateToken from "../middlerware/authMiddleware.js"

import AuthUser from "../models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const registrationUser=async(req,res)=>{
    const {username,password}=req.body
    if( username === "" || password === ""){
        return res.status(500).send(responseMessage.error("please fill all required", error));

    }
  try {
    const hashedPassword=bcrypt.hashSync(password,10)
    const user=new AuthUser({username,password:hashedPassword})
    const newUser=await user.save()
    return res.status(200).send(responseMessage.success("User registered successfully", newUser));
         
  } catch (error) {
    console.log(error)
    return res.status(500).send(responseMessage.error(error, error));

  }             
} 
const loginUser=async(req,res)=>{
    const {username,password}=req.body
    if( username === "" || password === ""){
        return res.status(500).send(responseMessage.error("your field is empty please fill "));

    }
  try {
    const currentUser=await AuthUser.findOne({username})
    if(!currentUser){
        return res.status(401).send(responseMessage.error("User not found"));
    }
    const passwordMatch = await bcrypt.compare(password, currentUser.password);
    if(!passwordMatch){
        return res.status(401).send(responseMessage.error("Invalid password"));
    }
    const token = jwt.sign({ userId: currentUser._id }, '12345687', {
        expiresIn: '1h',
        });
    return res.status(200).send(responseMessage.success("User registered successfully", token));
         
  } catch (error) {
    console.log(error)
    return res.status(500).send(responseMessage.error(error, error));

  }             
} 


export { registrationUser,loginUser } ;

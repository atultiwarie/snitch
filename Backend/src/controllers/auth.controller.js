import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import {config} from '../config/config.js'


async function generateToken(user){
    const token = jwt.sign(
        {id:user._id,email:user.email,userName:user.fullName,role:user.role}
        ,config.JWT_SECRET,
        {expiresIn:'1d'})
    return token;
}

export const registerUser = async (req,res)=>{
    const {email,password,contact,fullName} = req.body;
    try{
        const existingUser = await userModel.findOne({
            $or:[
                {email},
                {contact}
            ]
        })
        if(existingUser){
            return res.status(400).json({message:"User with this email or contact number already exists"})
        }

        const user  = await userModel.create({
            email,
            password,
            contact,
            fullName
        })

        const token = await generateToken(user);


    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server error"})
    }
}
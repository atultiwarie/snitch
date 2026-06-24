import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import {config} from '../config/config.js'


async function generateToken(user,res,message){
    const token = jwt.sign(
        {id:user._id,email:user.email,userName:user.fullName,role:user.role}
        ,config.JWT_SECRET,
        {expiresIn:'7d'})

        res.cookie('token',token)
        res.status(200).json({
            message,
            success:true,
            user:{
                id:user._id,
                email:user.email,
                fullName:user.fullName,
                contact:user.contact,
                role:user.role,
                token
            }
        })
    
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

        const token = await generateToken(user,res,"User registered successfully");

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server error"})
    }
}

export const loginUser = async (req,res)=>{
    
}
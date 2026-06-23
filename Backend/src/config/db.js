import mongoose from 'mongoose'
import {config} from './config.js'

const connectToDB = async () => {
    try {
        const mongoURI = config.MONGO_URI
        await mongoose.connect(mongoURI)
        console.log("MongoDB connected")
        
    } catch (error) {
        console.error("DB Connection Error: ",error)
        process.exit(1)
    }
    
}

export default connectToDB
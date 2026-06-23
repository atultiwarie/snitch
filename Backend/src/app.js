import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRouter from "./routes/auth.routes.js"

const app = express()

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Backend is running")
})

// auth routes
app.use('/api/auth',authRouter)

export default app
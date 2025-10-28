import express from"express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGRN,
    CredentialS: true
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// reouts import
import userRouter from './routes/user.routs.js';



//routes declaration 
app.use("/api/v1/users", userRouter)



export { app }
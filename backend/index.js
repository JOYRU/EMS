import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import authRouter from './src/router/authRouter.js';
import  seedRouter  from "./src/router/seedRouter.js";
import deparmentRouter from "./src/router/department.js";
import employeeRouter from "./src/router/employeeRouter.js";


const app = express() ; 

// const corsOptions = {
//     origin: 'https://dev-ems-frontend.vercel.app',  // Allow only this origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],     // Allow specific methods
//     allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
//   };
  
//   // Enable CORS with the specified options
//   app.use(cors(corsOptions));
//app.use(cors())
 app.use(cors({
     origin: 'http://localhost:5173', // Replace with your frontend domain
     methods: ['GET', 'POST','PUT','DELETE' ],
     credentials:true

   }));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser()) ;
app.use(express.static('public/uploads'))



app.use('/api/auth',authRouter)
 app.use('/api/seed',seedRouter)
 app.use('/api/departments',deparmentRouter)
 app.use('/api/employees',employeeRouter)


 const mongodbURL = 'mongodb+srv://joycseru:f01765711177@cluster0.l9t1yml.mongodb.net/ems'

// app.listen(process.env.PORT,async()=>{   
//     console.log('server is running on port') ;    
//     await mongoose.connect(mongodbURL) ; 
//     console.log('Connection to db Successfully established') ;
// })

app.listen(5000,async()=>{   
    console.log('server is running on port') ;    
    await mongoose.connect(mongodbURL) ; 
    console.log('Connection to db Successfully established') ;
})

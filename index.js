const express=require("express")
const app=express()
const dotenv=require('dotenv')
const dataBase=require('./db/db')
const authRoute=require('./routes/auth')
dotenv.config()

app.use(express.json())
dataBase.connect()

app.use('/api',authRoute)


app.listen(7000,()=>{
    console.log("Backend Server is Running 7000")
})

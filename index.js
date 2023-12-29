const express=require("express")
const app=express()
const dotenv=require('dotenv')
const dataBase=require('./db/db')

dotenv.config()

app.use(express.json())
dataBase.connect()




app.listen(7000,()=>{
    console.log("Backend Server is Running 7000")
})

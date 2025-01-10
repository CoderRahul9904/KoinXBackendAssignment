import mongoose from "mongoose";
require('dotenv').config({ path: `${__dirname}/configure.env` });
console.log(process.env.DB)
const db=process.env.DB!.replace('<db_password>',process.env.PASS!)

const KoinXCrypto:mongoose.Connection=mongoose.createConnection(db)  
KoinXCrypto.on('connected',()=>{
    console.log("Yes connected to KoinX DB")
})

KoinXCrypto.on('error',()=>{
    console.log('Failed to connect KoinX db')
})

module.exports=KoinXCrypto

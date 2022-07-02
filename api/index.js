import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app =express()
dotenv.config();
 

const connect =async ()=>{

try{
   await mongoose.connect(process.env.MONGO);
    console.log("connected to the db");

}
catch(err){
    throw err;
}
}



app.get("/users", (req,res)=>{
    res.send("hello first reequest");
})


app.listen(3001,()=>{
    connect();
    console.log("connected to backend");
});
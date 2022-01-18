import express from "express";
import { APP_PORT } from "./config";
import router from "./routes";
const app=express();


app.use('/api',router)//Jetne bhi routes hai unke sab mai /api append ho jayega so we dont have to write everytime
app.listen(APP_PORT,()=>{
    console.log("Runiing on port",APP_PORT);
})
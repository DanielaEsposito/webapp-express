// EXPRESS
const express=require("express");
const app = express();
//IMPORT .ENV
const {APP_HOST, APP_PORT}= process.env;
//REGISTRAZIONE MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));

//SERVER LISTENING
app.listen(APP_PORT,()=>{
    console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
    
});
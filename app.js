//! config enviroment variables
require ("dotenv").config();

// EXPRESS
const express=require("express");
const app = express();
//IMPORT .ENV
const {APP_HOST, APP_PORT}= process.env;
//REGISTRAZIONE MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
const errorsHandler = require("./middlewares/errorsHandler.js");
const notFound = require("./middlewares/notFound.js");

//!ROUTERS
//movies
const moviesRouter = require("./routes/movieRoutes");
app.use("/movies", moviesRouter);
const reviewsRouter = require("./routes/reviewsRoutes");
app.use("/reviews", reviewsRouter);

//! ERROR HENDLER
app.use(errorsHandler);
app.use(notFound);
//SERVER LISTENING
app.listen(APP_PORT,()=>{
    console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
    
});
// Pull in express library
const express = require ('express');
// Make variable for connection.js
const db = require('./config/connection');
// Make variable for routes folder
const routes = require('./routes');
// Use open port or 3001
const PORT= process.env.PORT || 3001;
// Variable for express
const app= express();


// Middlewares
app.use (express.urlencoded({extended:true}));
app.use(express.json());
app.use (routes);
// Make connection once
db.once('open',() =>{
// Listen to port
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
});
});
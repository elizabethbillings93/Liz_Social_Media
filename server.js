// Pull in express library
const express = require ('express');
// Make object for connection.js
const db = require('./config/connection');
// Make object for routes folder
const routes = require('./routes');
const PORT= process.env.PORT || 3001;
const app= express();

// Middlewares
app.use (express.urlencoded({extended:true}));
app.use(express.json());
app.use (routes);

app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
});
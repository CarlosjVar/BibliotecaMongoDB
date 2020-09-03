const http = require('http');
const path = require('path');
const fs = require('fs');


const express = require('express');
const logger = require('./Examples/Logger_Middleware.js')
const app = express();



//app.use(logger)


//Set static folder
app.use(express.static(path.join(__dirname,"resources")))
app.use('/api/members',require('./routes/api/members'))
//Router folder


const PORT = process.env.PORT || 8080 ;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}...`);
})



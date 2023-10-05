const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const  mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB)
  .then(() => console.log('mongodb_Connected...!'))
  .catch((error) => console.log('error in mongodb_connection...'))

  app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

  
const userRoute = require('./routes/userRoute')


 




app.use('/user',userRoute);
 

const port = process.env.PORT || 5001

app.listen(port,()=>{
    console.log(`Listening to localhost ${port}`);
});  
   

module.exports = app;
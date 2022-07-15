require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const testRouter = require('./routes/test');
const connectDB = require('./db/connect');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>NodeJs-API</h1>')
});


app.use('/boards',testRouter);
const port = 3000;

const start = async()=>{
    
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch(error){
         console.log(error);
    }
    
}

start();
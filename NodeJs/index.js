require('dotenv').config()

const express=require('express');
const mongodb=require('./DBUtil/DatabaseConfig');
const bodyParser=require('body-parser');


mongodb.connectToServer('CafeDB')


const app=express();


// this is for accessing public folder images html file etc
// app.use(express.static(process.env.STATIC_FOLDER));

// middleware 
// app.use(function(req,res,next){
//     // custome middleware
//     //other middleware body-parser - for parse request body
//     //,morgan : login middleware inshort log record of req,res
//     //session :
//     //express.static : for static file hosting
    
//     console.log("Middleware");
//     console.log(req.method,req.ip,req.url,req.headers);
//     next()
// })

app.use(bodyParser.json());


// configure all routes
const userRouter=require('./Routes/user.routes');
app.use('/users',userRouter);



app.listen(process.env.PORT,()=>{
  console.log('Server running on port number ',process.env.PORT);
})
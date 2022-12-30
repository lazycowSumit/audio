 /***********************npm modules**********************/
 var express = require('express');
 var mongoose = require('mongoose');

 var bodyParser = require('body-parser');
 const cors = require('cors');

 
 /***********************npm objects**********************/
 var app = express();
 var port = 8000;
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 app.use(cors({
     origin: '*'
 }));
 
 /***********************mongo db connection setup**********************/
 
 mongoose.connect('mongodb://localhost:27017/testDB', 
	{
  	//No More Deprecation Warning Options in Mongoose 6
  //- these are no longer supported options in Mongoose 6 - only use it with old versions
	 useNewUrlParser: true,
	// useUnifiedTopology: true,
	// useCreateIndex: true,
	// useFindAndModify: false
	})
.then(()=>{
	console.log('connected');
	})
.catch((e)=>{
	console.log("Something went wrong", e);
	})

 
    
    const authRoute=require("./router/image_vide")
    app.use("/api",authRoute);

  /*********************app listening*********************/

 app.listen(port);
 console.log(`server is running on ${port}`);
 
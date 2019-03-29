/*Express router is a class which helps us to create router handlers. 
By router handler i mean to not just providing routing to our app but also can extend this routing to handle validation, handle 404 or other errors etc.
*/

/*
Server.js
var express = require("express");
var app = express();

//Creating Router() object

var router = express.Router();

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
  res.json({"message" : "Hello World"});
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/api",router);

// Listen to this Port

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


*/


//==>Routing Path
/*
  ----> Routing pathh is used to define endpoint where the request can be made.
  ---> routh path can be string or regular expresssion
      router.get('/about', (req, res) => {
          res.send('This route path will match to /about')    
      })
 
      router.get('/profile.txt', (req, res) => {
      res.send('This route will match to /profile.txt')
    })


    //Routing path Using Regular Express
       router.get('/ab+xy', (req, res) => { // it will match abxy,abbxy,abbbxy......so on
        res.send('ab+xy')
    })
 
      router.get('/ab(xy)?z', (req, res) => { // it will match abxy|| abz
        res.send('/ab(xy)?z')
    })
  
  */
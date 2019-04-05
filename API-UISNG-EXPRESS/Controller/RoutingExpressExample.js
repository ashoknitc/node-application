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
    

app.get(/a/, function (req, res) {//This route path will match anything with an “a” in it.
  res.send('/a/')
})
  
  */

/*==Route Parermeter

  -->These are used to capture values that are specified at a certain position in the URL. They are called URL segments
  The values captured are made available in the req.params object,
----->The name of the route parameters must be made up of word characters ([A-Za-z0-9_]).
  eg:
  router.get('/users/:userId/articles/:articleId', (req, res) => {
  res.send(req.params)
})


===>Login Routes
---->Let's see how to create a login route in Express. 
Your login routes require two actions on a single route path. 
The actions will be differentiated by the route method used. Here is how it will look.
Syntax:
  router.get('/login', (req, res) => {
    res.send('This is should lead to the login form')
  })
 
  router.post('/login', (req, res) => {
   res.send('This is used in processing the form')
  })

---->After doing this, your store form should have an action whose value is the route defined with the HTTP POST method.
 Here is how it should look.

<form action="/login" method="POST">
   
</form>

NOte:
-->When the submit button of the form gets clicked, the specified router gets called. The difference between both route paths as stated above is the HTTP POST. This is how the application determines which is responsible for handling the data passed through the form.

Another aspect where this can be experienced is in the area of editing and updating resources.
*/
/*
  ==>Route Handler
  ----->A single callback function can handle a route. For example:
  app.get('/example/a', function (req, res) {
  res.send('Hello from A!')
})


-->More than one callback function can handle a route (make sure you specify the next object). 

For example:
            app.get('/example/b', function (req, res, next) {
            console.log('the response will be sent by the next function ...')
            next()
          }, function (req, res) {
            res.send('Hello from B!')
          })

----->An array of callback functions can handle a route. For example:

          var cb0 = function (req, res, next) {
            console.log('CB0')
            next()
          }

          var cb1 = function (req, res, next) {
            console.log('CB1')
            next()
          }

          var cb2 = function (req, res) {
            res.send('Hello from C!')
          }

app.get('/example/c', [cb0, cb1, cb2])


----->A combination of independent functions and arrays of functions can handle a route. For example:

        var cb0 = function (req, res, next) {
          console.log('CB0')
          next()
        }

        var cb1 = function (req, res, next) {
          console.log('CB1')
          next()
        }

        app.get('/example/d', [cb0, cb1], function (req, res, next) {
          console.log('the response will be sent by the next function ...')
          next()
        }, function (req, res) {
          res.send('Hello from D!')
        })

*/
/*  ===>Response Method 
      -->Method	Description
      res.download()	Prompt a file to be downloaded.
      res.end()	End the response process.
      res.json()	Send a JSON response.
      res.jsonp()	Send a JSON response with JSONP support.
      res.redirect()	Redirect a request.
      res.render()	Render a view template.
      res.send()	Send a response of various types.
      res.sendFile()	Send a file as an octet stream.
      res.sendStatus()	Set the response status code and send its string representation as the response body.


*/

/*  ===>Route Chaining ===
--->app.route() can be used to create a chain of route handlers for a specific route path.

Example:
  app.route('/login')
  .get((res, req) => {
    res.send('This is should lead to the login form')
  })
 
  .post((res, req) => {
    res.send('This is used in processing the form')
  })

*/
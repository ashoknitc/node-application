const express=require('express');
const fs=require('fs');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
  var now=new Date().toString();
  var log=now+" "+req.url+" "+req.method;
  console.log(log);
  fs.appendFile('logFile.log',log+'\n',(err)=>{
    if(err)
    {
      console.log("Unable to write data on file");
    }
    else {
      console.log("Data Writtern successfully");
    }
  });
  next();
});
app.use((req,res,next)=>{
  res.render('maintainance.hbs');
});

hbs.registerHelper('currentYear',function(){
  return new Date().getFullYear();
});
hbs.registerHelper('homeUpper',(test)=>{
  return test.toUpperCase();
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'Title Data'
  });
});
app.get('/',function(req,res) {
  res.render('home.hbs',{
    pageTitle:"Title Page",
    welcomeMessage:"welcome Page"
  });
});
app.listen(3000);
console.log('listening at localhost://3000');

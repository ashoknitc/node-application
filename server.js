const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view page', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.get('/about', (req, res) => {
  res.render('about.hbs');
});
hbs.registerHelper('headerYear', () => {
  var fullHeaderYear = new Date().getFullYear();
  return fullHeaderYear;
});
hbs.registerHelper('footerYear', () => {
  return new Date().getFullYear();
});
app.get('/', (req, res) => {
  res.render('home.hbs', {
    headerYear: new Date().getFullYear(),
    footerYear: new Date().getFullYear()
  });
});
app.get('/login', (req, res) => {
  res.render('login.hbs');
});
app.get('/register', (req, res) => {
  res.render('register.hbs');
});
app.get('/regiservers', (req, res) => {
  res.render('registerPage.hbs');
});

app.listen(3000);
console.log("listening at http://localhost:3000");
const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view page', 'hbs');

app.get('/about', (req, res) => {
    res.render('about.hbs');
});
app.listen(3000);
console.log('listening at localhost://3000');
const express = require('express');
var app = express();
app.use('/jsonResult', (req, res) => {
    res.send({
        id: 123,
        name: 'Ashok Kumar Sharma',
        address: [{
            Stree: 'Bangalore',
            District: 'Bangalore',
            State: 'Karnataka',
            Country: 'India'
        }]
    });
});
app.listen(3000);
console.log("Listening at http://localhost:3000/");
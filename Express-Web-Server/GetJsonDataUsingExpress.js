const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send({
        name: 'Ashok Kumar Sharma',
        address: {
            Street: 'Att=ibele',
            District: 'Bangalore',
            state: 'Karnataka',
            Pincode: '560068',
            country: 'India'
        },
        cars: [
            'alto',
            'nixon',
            'tata motors'
        ]
    });
});
app.listen(3000);
console.log("listening at http://localhost:3000/");
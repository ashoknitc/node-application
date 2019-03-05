var request = require('request');
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=new%20Delhi%20india',
    json: true
}, (err, response, body) => {
    console.log('Address:', body.results.geometry.location.lat);
    console.log('Address :', body.results.geometry.location.lan);


});
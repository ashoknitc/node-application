const request = require('request');
var geoCodeAddress = (address, callback) => {
    var encodeAddress = encodeURIComponent(address);
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
        encodeAddress,
        json: true
    }, (err, response, body) => {
        if (err) {
            console.log("There is an error");
        } else {
            console.log("Alternate Way");
        }
    });
};
module.exports = {
    geoCodeAddress
};
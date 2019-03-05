const request = require('request');
const yargs = require('yargs');
const argv = yargs.options({
    a: {
        demmand: true,
        String: true,
        alias: 'New Address',
        describe: 'Add New Address'
    }
}).help().alias('help', 'h').argv;
console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}',
    json: true
}, (err, response, body) => {
    //console.log('Latitude:', body.results.geometry.location.lat);
    //console.log('Longitutde:', body.results.geometry.location.lng);
    console.log(body);

});
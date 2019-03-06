const axios = require('axios');
const yargs = require('yargs');
var argv = yargs.options({
    a: {
        String: true,
        Demmand: true,
        describe: 'Add New Address',
        alias: 'Add new Address'
    }
}).help().alias('help', 'h').argv;
var encodeUrl = encodeURIComponent(argv.address);
var geoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeUrl;
axios.get(geoCodeUrl).then((response) => {
    console.log(response.data);

}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable To Connect To API Server');
    }
});
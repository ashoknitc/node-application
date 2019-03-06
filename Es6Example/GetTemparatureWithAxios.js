const yargs = require('yargs');
const axios = require('axios');
var argv = yargs.options({
    a: {
        demmand: true,
        String: true,
        describe: 'Add New AddressLine',
        alias: 'Pleazse add Re'
    }
}).help().alias('help', 'h').argv;
var encodeUrl = encodeURIComponent(argv.address);
axios.get(encodeUrl).then((reseponse) => {
    if (response.data.status === 'ZERO_RESULTS') {
        console.log("Unable to find Address");
    }
    var lat = 39.9396284;
    var lang = -75.18663959999999;
    var weatherUrl = 'https://api.darksky.net/forecast/c6f1302645535a94b1e6e8a2c5450e96/' + lat + ',' + lang;
    console.log(response.data.results[0].formated_address);
    return axios.get(weatherUrl);
}).then((reseponse) => {
    var temperature = reseponse.data.currently.temperature;
    console.log(temperature);

}).catch((e) => {
    console.log('Unable To Connect With Server ApI');

});
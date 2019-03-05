const getWather = require('./GetWeather');
const geoCode = require('./geoCode');
const getWeatherInfo = require('./Get_Weather_Info_with_Lat_Lon');

//getWather.getWeatherInfo();
const yargs = require('yargs');
const argv = yargs.options({
    a: {
        demmand: true,
        String: true,
        describe: 'Add new Address',
        alias: 'Please add kar de'
    }
}).help().alias('help', 'h').argv;
geoCode.geoCodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);

    } else {
        console.log(result.address);

        getWeatherInfo.getWeather(12.776330, 77.778297, (errorMessage, message, result) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log("it is currently " + result.temperature + " it feels like " + result.apparentTemperature);


            }
        });
    }
});


/*const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/84d9a7da15fe471aa3b5e54eff0ed77a/12.776330,77.778297',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('error in url');
    } else if (response.statusCode >= 400 && response.statusCode < 500) {
        console.log("Generate User Defined Error");
    } else if (response.statusCode >= 500) {
        console.log("Generate Server Error");

    } else if (response.statusCode == 200) {
        console.log("Time In Milli Seconds :", body.currently.time);
        console.log("Latitute: " + body.latitude);
        console.log("Longitude: " + body.longitude);
        console.log("Current Temparatur: " + body.currently.temperature);
    } else {
        console.log("Unable To Run This application");

    }
});*/
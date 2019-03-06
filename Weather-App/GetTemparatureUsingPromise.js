var request = require('request');
var getWeather = (latitute, longitute) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://api.darksky.net/forecast/84d9a7da15fe471aa3b5e54eff0ed77a/' + latitute + ',' + longitute,
            JSON: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect with forecast.io please try Again');
            } else {
                resolve(body.currently.apparentTemperature);
            }
        });
    });
};
getWeather(12.776330, 77.778297).then((result) => {
    console.log(result);

}, (errorMessage) => {
    console.log(errorMessage);

});
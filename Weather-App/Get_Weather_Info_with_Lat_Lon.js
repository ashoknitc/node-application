 const request = require('request');
 var getWeather = (latitute, langitude, callback) => {
     request({
         url: 'https://api.darksky.net/forecast/84d9a7da15fe471aa3b5e54eff0ed77a/' + latitute + ',' + langitude,
         json: true
     }, (error, response, body) => {
         if (error) {
             callback('unable to connect with forecast.io');
         } else if (response.statusCode == 400) {
             callback('unable to fetch Weather');
         } else if (response.statusCode == 200) {
             callback(undefined, {
                 temperature: body.currently.temperature,
                 apparentTemperature: body.currently.apparentTemperature
             });
         } else {
             console.log('got errorCode');
         }
     });
 };
 module.exports.getWeather = getWeather;
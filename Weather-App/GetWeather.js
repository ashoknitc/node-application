const request = require('request');
var getWeatherInfo = () => {
    request({
        url: 'https://api.darksky.net/forecast/84d9a7da15fe471aa3b5e54eff0ed77a/12.776330,77.778297',
        json: true
    }, (error, response, body) => {
        if (response.statusCode >= 400 && response.statusCode < 500) {
            console.log("Generate User Defined Error Try to solve it");
        } else if (response.statusCode >= 500) {
            console.log("Generate 500 Server Error");
        } else if (response.statusCode == 200) {
            //console.log(body);//used to show all the information in the json format
            console.log('Latitude :' + body.latitude);
            console.log("Longitute :" + body.longitude);
            console.log("Current Temparature(Ferunhite): " + body.currently.temperature);
            console.log("OZOne :" + body.currently.ozone);
        } else {
            console.log("Unable To get Result");

        }
    });
};
module.exports.getWeatherInfo = getWeatherInfo;
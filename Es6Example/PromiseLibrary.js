const axios = require('axios');
var addTwoNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a == 'number' && typeof b == 'number') {
                resolve(a + b);
            } else {
                reject("Please provide Two agrument For Addition");
            }
        }, 3000);
    });
};
axios.get().then((reseult) => {
    console.log(reseult);

}).catch((errorMessage) => {
    console.log(errorMessage);

});
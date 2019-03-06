var addTwoNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a == 'number' && typeof b == 'number') {
                resolve(a + b);
            } else {
                reject('Both Number Should be Integer only');
            }
        }, 3000);
    });
};
addTwoNumber(12, 13).then((result) => {
    console.log(result);
    return addTwoNumber(result, 25);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((success) => {
    console.log(success);
    return addTwoNumber(success, 25);
}, (errorMessage1) => {
    console.log(errorMessage1);
}).then((success1) => {
    console.log(success1);
}).catch((errorMessage3) => {
    console.log(errorMessage3);
});
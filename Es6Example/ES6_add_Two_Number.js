var addTwoNumber = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout((

        ) => {
            if (typeof a == 'number' && typeof b == 'number') {
                resolve(a + b);
            } else {
                reject("Given Number Must be Number");
            }
        }, 3000);
    });
};
addTwoNumber(12, 13).then((reseult) => {
    console.log(reseult);

}, (errorMessage) => {
    console.log(errorMessage);

});
var v = 11;
var promises = new Promise((resolve, reject) => {
    if (v == 10) {
        resolve('Hi This is Resolve Section');
    } else {
        reject('Hi This is Reject Section');
    }
});
promises.then((result) => {
    console.log(result);
}, (errorMessage) => {
    console.log(errorMessage);
});
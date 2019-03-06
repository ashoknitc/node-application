var promise = new Promise((resolve, error) => {
    resolve('Hi This is resolve Section');
});
promise.then((result) => {
    console.log(result);

}, (errorMessage) => {
    console.log(errorMessage);

});
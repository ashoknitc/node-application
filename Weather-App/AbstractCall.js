const yargs = require('yargs');
var geocod = require('F://node-applications/node-application/Weather-App/geoCode.js');
const argv = yargs.options({
    a: {
        demamnds: true,
        String: true,
        describe: 'Add new address on page',
        alias: 'insert new address'
    }
}).help().alias('help', 'h').argv;
console.log(argv);
geocod.geoCodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result), undefined, 2);

    }
});
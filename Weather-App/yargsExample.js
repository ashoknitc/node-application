const yars = require('yargs');
const argv = yars.options({
    a: {
        demmand: true,
        String: true,
        describe: 'New Address of Example',
        alias: 'new addredd'
    }
}).help().alias('help', 'h').argv;
console.log(argv);
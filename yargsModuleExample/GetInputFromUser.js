const yargs = require('yargs');
console.log('process.argv ', process.argv);
console.log('yargs.argv :', yargs.argv);
var command = process.argv[2];
if (command == 'add') {
    console.log('call add()');
} else if (command == 'list') {
    console.log('listout all the Nodes');
} else if (command == 'remove') {
    console.log('removing');
} else if (command == 'read') {
    console.log('Perform Reading');

} else {
    console.log("function is not defined");

}
const yargs = require('yargs');
const note = require('./externalFile');
console.log('Process.argv :', process.argv);
console.log('Yargs.argv :', yargs.argv);

var command = process.argv[2];
if (command == 'add') {
    note.addNote(process.argv.title, process.argv.body);
} else if (command == 'list') {
    note.getAllList();
} else if (command == 'read') {
    note.readJson();
} else if (command == 'writeFile') {
    note.writeJsonDataIntoFile();
} else if (command == 'readFile') {
    note.readFileData();
} else {
    console.log("Default function class");

}
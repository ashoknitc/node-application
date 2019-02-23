var fs = require('fs');
console.log('Starting External App');
const Student = {
    name: 'Ashok Kumar Sharma',
    email: 'ashokk@gmail.com',
    phone: '7878787890'
};
var addNote = (t, b) => {
    console.log('Adding Node with ' + t + "  " + b);

};
var getAllList = () => {
    console.log('getting all Node List');
};
var getNode = (title) => {
    console.log('First Node :', title);
};
var removeNode = (title) => {
    console.log('Removing Node :', title);

};
var readJson = () => {

    console.log(JSON.stringify(Student));

};
var writeJsonDataIntoFile = () => {
    fs.appendFile('student-data.JSON', JSON.stringify(Student), function (err) {
        if (err) throw err;
        console.log('Data Which is written into file are :', JSON.stringify(Student));

    });
}
var readFileData = () => {
    var readData = fs.readFile('student-data.JSON', function (err, data) {
        if (err) throw err;
        console.log(data.toString());
        console.log(JSON.parse(data));


    });
};

module.exports = {
    addNote,
    getAllList,
    getNode,
    removeNode,
    readJson,
    writeJsonDataIntoFile,
    readFileData
};
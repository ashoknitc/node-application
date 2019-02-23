var obj = {
    name: 'Ashok',
    email: 'ashokk@gmail.com',
    phone: '7877877877'
};
var stringValue = JSON.stringify(obj);
console.log('stringValue :' + stringValue);

var persionString = '{"name":"Ashok","Age":25}';
var person = JSON.parse(persionString);
console.log(typeof (persionString));
console.log(person);
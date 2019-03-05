console.log("Encode URL Example");
var name = "Ashok Kumar Sharma";
var encodeValue = encodeURIComponent(name);
console.log(encodeValue);

console.log("Decode URL Example");
var decodeUrl = decodeURIComponent(encodeValue);
console.log(decodeUrl);
var getUser = (id, callback) => {
    var myObject = {
        id: id,
        name: 'Ashok Kumar Sharma'
    };
    setTimeout(() => {
        callback(myObject);
    }, 3000);
    callback(myObject);
};
getUser(32, (user) => {
    console.log(user);

});
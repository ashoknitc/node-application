var getUser = (id, callback) => {
    var myObj = {
        id: id,
        name: 'Ashok'
    };
    callback(myObj);
};
getUser(32, (user) => {
    console.log(user);

});
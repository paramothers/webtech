
var getUser = (id, callback) => {

    let user = {

        id:id,
        name:'Param'
    };

    setTimeout(() => {
        callback(user);
    }, 2000);
   
}

getUser(31, (user) => {
    console.log(user.name);
    console.log(user.id);
});
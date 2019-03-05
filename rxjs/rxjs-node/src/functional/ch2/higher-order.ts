const unless = (predicate, fun) => {

    if (!predicate) {
        fun();
    }
};

const forEach = (arr, fun) => {

    for (let i = 0; i < arr.length; i++) {

        fun(arr[i]);
    }
};

forEach([1, 23, 4, 5, 5, 56], (numb) => {

    unless((numb % 2), () => {
        console.log('It is even');
    });

});

const every = (arr, fun) => {

    let result = true;
    for (const val of arr) {
        result = result && fun(val);
    }
    return result;

};

const people = [
    {firstname: 'aaFirstName', lastname: 'cclastName'},
    {firstname: 'ccFirstName', lastname: 'aalastName'},
    {firstname: 'bbFirstName', lastname: 'bblastName'}
];

people.sort((a, b) => {
    return a.firstname < b.firstname ? -1 : a.firstname > b.firstname ? 1 : 0;
});

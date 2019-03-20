const setup = (arr) => {

    let index = 0;
     
    return () => {
        return arr[index++];
    }
};

let next = setup([1,3,5,5,6]);
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

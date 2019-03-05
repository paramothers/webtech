
export const sortBy = (property) => {

    //this is the sorting function.
    return (a,b) => {

        var result = (a[property] < b[property])? -1 : (a[property] > b[property])? 1 : 0;
        return result;
    }
}

export const tap = (value) => {

    return (fn) => {
        typeof(fn) === 'function' && fn(value),
        console.log(value);        
    }

}
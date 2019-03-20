const tap = (value) => (fun) => ( typeof(fun) === 'function' && fun(value) , console.log(value))  

const isAdult =  (age) => age > 18


export const testTapFunction = () => {

    //tap("Paramasivam")((it) => console.log('the parameters ',it));

    let aage = [2,34,6,7];
    aage.forEach( (age) => {
        tap(age)(isAdult)
    })

    console.log(['1','2'].map(parseInt));
    
}

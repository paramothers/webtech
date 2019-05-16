function multiply(a, b = 2){

    return a*b;
}

console.log(multiply(5));
console.log(multiply(5,5));

function foo(num = 1, multi = multiply(num)){
    return [num, multi];
}

console.log(foo());
console.log(foo(2));

function createElement(tag = 'div', {content = 'Vary Default', classNames = ['a','b']} = {}){

    const element = document.createElement(tag);
    const contentNode =  document.createTextNode(content);
    element.classList.add([...classNames]);

    element.appendChild(contentNode);

    return element;
}

const moduless = {
   
    foo: 42,
    bar (value){
        console.log("is it......",this.foo);
    }
}

moduless.bar();
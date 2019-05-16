let target = {
    a:1,
    b:2,
    c:3
}

const handler = {

    get: function(target, name){
        return ( name in target ? target[name]: 42 );
    },

    set: function(target, prop, value){
      
        if(prop.length  === 1 && prop >= 'a' && prop <='z'){
            target[prop] =  value;
            return true;
        }else{

            throw new ReferenceError(prop+' canot be set');
            return false;
        }
    } 

}



let proxy = new Proxy(target,handler);
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.c);
// console.log(proxy.aas);

proxy.a = 23;
proxy.b = 89;
proxy.y = 56;
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.y);
// console.log(proxy.aas);

// proxy.y4 = 56;

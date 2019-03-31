let user = {
    name:'param',
    age:38
}

let keys = Object.keys(user);

for(const key of keys){

    console.log(key);
}

let handler = {

    get: function(target, name){
        return name in target ? target[name]: 42;
    }
}

let proxy = new Proxy({}, handler);

proxy.a = 100;
proxy.b = undefined;

console.log(proxy.a, proxy.b);
console.log('c' in proxy, proxy.c);

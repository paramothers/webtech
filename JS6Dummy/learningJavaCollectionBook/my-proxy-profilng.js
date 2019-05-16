
function profileing(target){

    const count = {}
    const handler = {

        get: function(target, prop){

            if(prop in target){
                count[prop] =  (count[prop] || 0) + 1;
                return target[prop];
            }           
        }
    }

    const proxy = new Proxy(target,handler);
    return {
        count,
        proxy
    }
}

const myObject = {
    h: 'hollow',
    w: 'world'
}

let tempProxy = profileing(myObject);

tempProxy.proxy.h;
tempProxy.proxy.h;
tempProxy.proxy.h;
console.log(tempProxy.count.h);
console.log(tempProxy.count.w);
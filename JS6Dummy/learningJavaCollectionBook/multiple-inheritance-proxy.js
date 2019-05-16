const sender = {

    transmit(){
        console.log('Transmit');
    }
}

const receiver = {
    receive(){
        console.log('Receive');
    }
}

const handler = {

    get: function(targetInstanceArray, prop){

        const found = targetInstanceArray.find( parent => parent[prop]);
        return found && found[prop];
    }
}

const multipleInheritance = new Proxy([sender, receiver], handler);

multipleInheritance.receive();
multipleInheritance.transmit();
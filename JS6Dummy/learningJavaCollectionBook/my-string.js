class MyString {

    demoStringMethods() {

        let str = 'hellow';
        let result  = str.startsWith('he');
        console.log("result ",result);
        
        result = str.startsWith('ll',2);
        console.log("result ",result);        
        
        result =  str.endsWith('ow', 6);
        console.log("result ",result);
        
        result = str.includes('ll');
        console.log("result includes ",result);
        
        str = "hai param, i am param";
        result = str.repeat(2);
        console.log("result repeat ",result);
        result = str.repeat(0);
        console.log("result repeat ",result);
        // result = str.repeat(-1);
        console.log("result repeat ",result);

        let myName = "Paramasivam k";
        result = String.raw`Hello, Welcome ${myName}`;
        console.log("result raw ",result);
    }
}

let myString = new MyString();
myString.demoStringMethods();
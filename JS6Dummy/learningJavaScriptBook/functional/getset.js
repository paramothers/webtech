let getSecret, setSecret;

( function(){

    let secret = "yyyyy";
    
    getSecret = () => {
        return secret;
    }

    setSecret = (val) => {
        if( typeof val === 'number'){

            secret = val;
        }
    }
}());

setSecret(23);
console.log(getSecret());

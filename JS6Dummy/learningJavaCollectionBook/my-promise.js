class MyPromise{

    demoMyPromise(){

        const promise = new Promise( (resolve, reject) => {

            const request = new XMLHttpRequest();
            console.log('request ',request);

            request.open('GET','https://api.icndb.com/jokes/random');

            request.onload = () => {

                console.log('readstate ',request.readyState);
                if(request.status === 200){
                   resolve(request.response);
                }else{
                    reject(new Error(request.responseText));
                }
            }
            request.onerror = () => {

                reject(new Error('Error fetching data'));
            }

            request.send();
        });

        console.log('====================================');
        console.log('Asynchrronous reqeust has made');
        console.log('====================================');

        promise.then( (data) => {
            console.log('====================================');
            console.log(JSON.parse(data).value.joke);
            console.log('====================================');
        }, (error) => {

            console.log('Promise rejected ');
            console.log('====================================');
            console.log(error.message);
            console.log('====================================');
        })
    }
}

let myPromise = new MyPromise();
myPromise.demoMyPromise();
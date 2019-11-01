export function add(){

    return new Promise(callback => {

        setTimeout( ()=>{

            let totol = 500;
            callback(totol);
        },100);
    });
}

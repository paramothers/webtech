module.exports = {
    
    area: (seed)=>{
        
        setTimeout(()=>{
            console.log('I am late');
        },2000);
        return seed * seed;
    },
    
    perimeter:  function(seed){
        return 1 + seed;
    }
}

// exports.areaw = function(seed){
    
//     return seed * seed;
// };

// exports.fibnaci = function(seed){
    
//     return seed * seed + 1;
// }
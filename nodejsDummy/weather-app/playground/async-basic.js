console.log('Starting ');

setTimeout(() => {
    
    console.log('After 2 minutes');
}, 2000);
setTimeout(() => {
    console.log('second timeout');
}, 0);
console.log('Finished ');
const aFun = () => {
    console.log('alert A');
    return () => {
        console.log('Alert B');        
    }
}

aFun()();
const unary = (fun) => fun.length === 1 ? fun : (arg) => fun(arg)

export const myUnary = () => {

    
    console.log(['1','2'].map(unary(parseInt)));
}
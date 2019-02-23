export class CustomeForeach {

    public simple(): void {

        const simpleArray = [2, 3, 46, 5, 5];
        this.forEach(simpleArray, this.print);
        console.log(typeof this.print);
    }

    public testStringFunction(): void {

        const builtInString = this.crazy();
        console.log(builtInString('AAAAA'));
        console.log(this.crazy()('BBBB'));
    }

    //it is higher order function
    private forEach = (array, fun) => {

        for (let i = 0; i < array.length; i++) {
            fun(array[i]);
        }
    };

    private print = (value) => {
        console.log(value);
    };

    private crazy = () => {
        return String;
    };
}

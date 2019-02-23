const even = (num: number) => num % 2 === 0;
const square = (num: number) => num * num;
const add = (a: number, b: number) => a + b;

function BufferedIteroator(bufferSize = 2, arr: any) {

    this[Symbol.iterator] = function() {

        let nextIndex = 0;
        return {
            next: () => {

                if (nextIndex >= arr.lenth) {
                    return {done: true};
                } else {

                    const buffer = new Array(bufferSize);
                    for (let i = 0; i < bufferSize; i++) {

                        buffer[i] = arr[nextIndex++];
                    }
                    return {value: buffer, done: false};
                }

            },
        };
    };
}

export class Higherorder {

    public demoHigherOrder(): void {

        const array = [1, 2, 3, 4, 26, 6, 7, 8, 9, 10];
        const restul = array.filter(even).map(square).reduce(add);
        console.log('Done ', restul);
    }

    public streamDemo(): void {

        //Stream([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
}

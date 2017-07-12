interface Point{

    x :  number;
    xy: number[];
}



/**
 * SimpleClassTesting
 */
class SimpleClassTesting implements Point{

    public x: number = 23;
    public xy: number[] = [1,3,4,5];
    protected nameLst : string[] = ['a','b','c'];

    constructor(parameters) {
        
    }

    settingMethod(){

    }

    thirdMethod(){

    }

    
}
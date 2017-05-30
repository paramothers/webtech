
class Person{
    public names: string;
    private age: number;
    protected salary: number;
}

let person : Person;

person.names = `Paramasivam k`;

class Wife extends Person{

    public sex : string;
    public relationship = [];
    constructor(public jobTitle: string){
        super();
        this.relationship.push(jobTitle);
    }
}
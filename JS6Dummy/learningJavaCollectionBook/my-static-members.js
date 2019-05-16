class MyUser{

    
    static getAge(){

        return 23;
    }
}

console.log(MyUser.getAge());

class Employee {

    constructor(firstName, familyName){
        this._firstName = firstName;
        this._familyName = familyName;
    }

    getFullName(){
        return `${this._firstName} ${this._familyName}`;
    }
}

class Manager extends Employee{

    constructor(firstName, familyName){
        super(firstName, familyName);
        this._managedEmployee = [];
    }

    addEmployee(employee){

        this._managedEmployee.push(employee);
    }
}

class Group{

    constructor(employee){

        this._manager = employee;
        this._managedEmployee = [];
    }

    addEmployee(employee){

        this._managedEmployee.push(employee);
    }
}
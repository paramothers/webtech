
const today = {

    month:24,
    day: 12
}

const tomorrow = {
    year: today.year,
    month: today.month,
    day: today.day+ 1,
}

class SimpleDate {

   

    constructor(year, month, day){

        this._year = year;
        this._month = month;
        this._day = day;

        this.addDays2 = function(days){
            this._day = this._day + days;
        }

        this.getDay2 = function(){
            return this._day;
        }
    }

    addDays(days){

        this._day = this._day + days;
        console.log('name ',this.name);
    }

    getDay(){
        return this._day;
    }
}

const myDay = new SimpleDate(2010,9,23);
console.log(myDay.getDay2());
myDay.addDays2(2);
console.log(myDay.getDay2());

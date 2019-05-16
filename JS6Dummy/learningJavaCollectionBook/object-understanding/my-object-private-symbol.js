const SimpleDate = (function(){

    const _day = Symbol();
    const _month = Symbol();
    const _year = Symbol();

    class SimpleDate {

        constructor(day,month, year){

            this[_day] = day;
            this[_month] = month;
            this[_year] = year;
        }
    }

    return SimpleDate;
}());
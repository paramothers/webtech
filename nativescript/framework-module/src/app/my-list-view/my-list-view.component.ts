import {Component, OnInit} from '@angular/core';

class Country {

    constructor(public name: string) {
    }
}

let europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
    "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
    "Slovenia", "Spain", "Sweden", "United Kingdom"];

@Component({
    selector: 'ns-my-list-view',
    templateUrl: './my-list-view.component.html',
    styleUrls: ['./my-list-view.component.css'],
    moduleId: module.id,
})
export class MyListViewComponent implements OnInit {

    public countries: Array<Country>;

    constructor() {
    }

    ngOnInit() {

        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {

            this.countries.push(new Country(europianCountries[i]));
        }
    }

    onItemTab(args):void {
        console.log("selected index ", args.index);
    }

}

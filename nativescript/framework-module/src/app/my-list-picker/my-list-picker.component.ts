import {Component, OnInit} from '@angular/core';
import {ListPicker} from "tns-core-modules/ui/list-picker";

let pokemonanList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: 'ns-my-list-picker',
    templateUrl: './my-list-picker.component.html',
    styleUrls: ['./my-list-picker.component.css'],
    moduleId: module.id,
})
export class MyListPickerComponent implements OnInit {

    public pokemans: Array<string> = [];
    public picked: string;

    constructor() {

        for (let i = 0; i < pokemonanList.length; i++) {

            this.pokemans.push(pokemonanList[i]);
        }
    }

    ngOnInit() {
    }

    onSelectedIndexedChange(event) {

        let listPicker = <ListPicker>event;
        this.picked = this.pokemans[listPicker.selectedIndex];

    }


}

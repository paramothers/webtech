import {Component, OnInit} from '@angular/core';
import {SetupItemViewArgs} from "nativescript-angular";

let items = ["ALL Heroes (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster",
    "Outworld Devourer", "Sniper", "Lina", "Sven", "Visage", "Undying", "Tiny", "Tidehunter", "Puck", "Ursa",
    "Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden", "Batrider", "Riki", "Invoker", "Venomancer",
    "Timbersaw", "Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress",
    "Bristleback", "Pudge", "(footer)"];

class Item {
    constructor(private name: string) {
    }
}

@Component({
    selector: 'ns-my-custom-list-view',
    templateUrl: './my-custom-list-view.component.html',
    styleUrls: ['./my-custom-list-view.component.css'],
    moduleId: module.id,
})
export class MyCustomListViewComponent implements OnInit {


    dataItems: Array<Item>;

    constructor() {
    }

    ngOnInit() {

        this.dataItems = [];
        for (let i = 0; i < items.length; i++) {

            this.dataItems.push(new Item(items[i]));
        }
    }

    onSetupItemView(args: SetupItemViewArgs): void {

        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    }
}

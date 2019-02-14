import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {ReturnKeyType} from "tns-core-modules/ui/enums";
import search = ReturnKeyType.search;

class DataItem {
    public constructor(public  name: string) {
    }
}

@Component({
    selector: 'ns-my-searchbar',
    templateUrl: './my-searchbar.component.html',
    styleUrls: ['./my-searchbar.component.css'],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySearchbarComponent implements OnInit {

    searchPhrase: string = "Thanks To god";
    private dataItemArray: Array<DataItem>;
    private myItems: ObservableArray<DataItem> = new ObservableArray<DataItem>();

    constructor() {

        this.dataItemArray = [];
        this.dataItemArray.push(new DataItem("United"));
        this.dataItemArray.push(new DataItem("Bulgaria"));
        this.dataItemArray.push(new DataItem("Germany"));
        this.dataItemArray.push(new DataItem("Denmark"));
        this.dataItemArray.push(new DataItem("India"));
        this.dataItemArray.push(new DataItem("Spain"));
        this.dataItemArray.push(new DataItem("Italy"));

        this.myItems = new ObservableArray<DataItem>(this.dataItemArray)
    }

    ngOnInit() {
    }

    onTextChanged(args) {

        let searchBar = <SearchBar>args.object;
        console.log("changed search text. New Value ", searchBar.text);
    }

    onSubmit(args) {

        let searchBar = <SearchBar>args.object;
        console.log("changed search text ", searchBar.text);

        this.myItems = new ObservableArray<DataItem>();

        for (let i = 0; i < this.dataItemArray.length; i++) {

            if (this.dataItemArray[i].name.indexOf(searchBar.text) != -1) {
                this.myItems.push(this.dataItemArray[i]);
            }

        }
    }

    onClear(args) {

        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search country";

        this.dataItemArray.forEach(datItem => {
           this.myItems.push(datItem);
        })

    }

}

import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {View} from "tns-core-modules/ui/core/view";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {getRootView} from "tns-core-modules/application";

@Component({
    selector: 'ns-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css'],
    moduleId: module.id,
})
export class BrowseComponent implements OnInit {

    constructor(private location: Location) {
    }

    ngOnInit() {
    }
    onDrawerButtonTap():void {

        const sideDrawer = <RadSideDrawer>getRootView();
        sideDrawer.showDrawer();
    }
}

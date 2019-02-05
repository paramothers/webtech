import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {View} from "tns-core-modules/ui/core/view";

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

    closeModal(scrollView: View): void {
        scrollView.closeModal();
    }
}

import {Component, OnInit} from '@angular/core';
import {EventData} from "tns-core-modules/data/observable";
import {Button} from "tns-core-modules/ui/button";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'ns-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    moduleId: module.id,
})
export class MessageComponent implements OnInit {

    constructor(private routerExtension: RouterExtensions) {
    }

    message: string;
    today = new Date(2019,2,3);

    ngOnInit() {

        this.message = "welcome param";
    }

    onTab(data: EventData): void {

        console.log("Button tapped");

        const button = <Button>data.object;

        this.routerExtension.navigate('[/home]')

    }

}

import {Component, OnInit} from '@angular/core';
import {Switch} from "tns-core-modules/ui/switch";

@Component({
    selector: 'ns-my-switch',
    templateUrl: './my-switch.component.html',
    styleUrls: ['./my-switch.component.css'],
    moduleId: module.id,
})
export class MySwitchComponent implements OnInit {

    firstSwitchState: string = "ON";
    secondSwitchState: string = "ON";

    constructor() {
    }

    ngOnInit() {
    }

    onSecondChange(args) {

        let ss = <Switch>args.object;
        if (ss.checked) {
            this.secondSwitchState = "ON";
        } else {
            this.secondSwitchState = "OFF";
        }

    }

    onFirstChange(args) {

        let ss = <Switch>args.object;
        if (ss.checked) {
            this.firstSwitchState = "ON";
        } else {
            this.firstSwitchState = "OFF";
        }

    }
}

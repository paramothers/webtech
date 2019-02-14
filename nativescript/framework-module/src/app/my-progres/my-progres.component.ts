import {Component, OnInit} from '@angular/core';
import {Progress} from "tns-core-modules/ui/progress";

@Component({
    selector: 'ns-my-progres',
    templateUrl: './my-progres.component.html',
    styleUrls: ['./my-progres.component.css'],
    moduleId: module.id,
})
export class MyProgresComponent implements OnInit {

    progressValue: number;

    constructor() {
    }

    ngOnInit() {
        this.progressValue = 20;

        setInterval(() => {
            this.progressValue += 1;
        }, 300)
    }

    onValueChange(args){

        let progressBar = <Progress>args;
        console.log("value of progress ", progressBar.value);

    }

    onProgressBarLoaded(args):void {

        let progressBar = <Progress>args;

        progressBar.value = 10;
        progressBar.maxValue = 100;
    }

}

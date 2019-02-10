import {Component, OnInit} from '@angular/core';
import {View} from "tns-core-modules/ui/core/view";

@Component({
    selector: 'ns-animate-second',
    templateUrl: './animate-second.component.html',
    styleUrls: ['./animate-second.component.css'],
    moduleId: module.id,
})
export class AnimateSecondComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    animate(view: View): void {

        let duration = 300;
        view.animate({opacity:0, duration:duration})
            .then( ()=> view.animate({opacity:1, duration:duration}))
            .then( ()=> view.animate({translate:{ x:200, y: 200}, duration:duration}))
            .then( ()=> view.animate({translate:{x:0,y:0}, duration:duration}))
            .then( ()=> view.animate({scale: {x:5, y:5}, duration:duration}))
            .then( ()=> view.animate({scale:{x:0,y:0}, duration:duration}))
            .then( ()=> view.animate({rotate:180, duration:duration}))
            .then( ()=> view.animate({rotate:0, duration:duration}))
            .then(()=>{
                console.log("Animation completed");
            }).catch((err)=>{
                console.log("error ", err.message);
        });

    }

}

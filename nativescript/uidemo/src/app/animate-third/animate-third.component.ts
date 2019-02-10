import {AfterViewInit, Component, OnInit} from '@angular/core';
import {View} from "tns-core-modules/ui/core/view";
import {Page} from "tns-core-modules/ui/page";
import {Animation, AnimationDefinition} from "tns-core-modules/ui/animation";

let view1: View;
let view2: View;
let view3: View;
let view4: View;

@Component({
    selector: 'ns-animate-third',
    templateUrl: './animate-third.component.html',
    styleUrls: ['./animate-third.component.css'],
    moduleId: module.id,
})
export class AnimateThirdComponent implements AfterViewInit {


    constructor(private page: Page) {
    }

    ngOnInit() {
    }

    animate() {
        let animationArray = new Array<AnimationDefinition>()

        let duration = 3000;

        let a1: AnimationDefinition = {
            target: view1,
            translate: {x: 200, y: 0},
            duration: duration
        };
        animationArray.push(a1);

        let a2: AnimationDefinition = {

            target: view2,
            translate: {x: 0, y: 200},
            duration: duration
        };
        animationArray.push(a2);

        let a3: AnimationDefinition = {
            target: view3,
            translate: {x: -200, y: 0},
            duration: duration
        }
        animationArray.push(a3);

        let a4: AnimationDefinition = {

            target: view4,
            translate: {x: 0, y: -200},
            duration: duration
        }
        animationArray.push(a4);

        let aniationSet = new Animation(animationArray);
        aniationSet.play().then(
            () => console.log("Animiation finished")
        ).catch(
            () => console.log('Animatino error')
        )

    }

    reset() {

        view1.translateX = 0;
        view1.translateY = 0;

        view2.translateX = 0;
        view2.translateY = 0;

        view3.translateX = 0;
        view3.translateY = 0;

        view4.translateX = 0;
        view4.translateY = 0;

    }

    ngAfterViewInit(): void {

        view1 = this.page.getViewById<View>("view1");
        view2 = this.page.getViewById<View>("view2");
        view3 = this.page.getViewById<View>("view3");
        view4 = this.page.getViewById<View>("view4");
    }
}

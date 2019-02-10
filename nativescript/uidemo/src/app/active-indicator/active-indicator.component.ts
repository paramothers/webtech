import { Component, OnInit } from '@angular/core';
import {ActivityIndicator} from "tns-core-modules/ui/activity-indicator";
import {Label} from "tns-core-modules/ui/label";
import {Color} from "tns-core-modules/color";

import * as enums from "tns-core-modules/ui/enums";

@Component({
  selector: 'ns-active-indicator',
  templateUrl: './active-indicator.component.html',
  styleUrls: ['./active-indicator.component.css'],
  moduleId: module.id,
})
export class ActiveIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBusyChanged(args):void {

    const indicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }

  animate(label: Label) {

    label.animate({
      opacity:0.50,
      backgroundColor: new Color("Blue"),
      translate: { x: 200, y: 200 },
      scale: { x: 2, y: 2 },
      rotate: 180,
      duration: 3000,
      delay: 20,
      iterations: 15,
      curve: enums.AnimationCurve.easeIn
    }).then(
        () => {
          console.log("Animation finished");
        }
    ).catch(
        (e) =>{
          console.log(e.message);
        }
    );
  }


}

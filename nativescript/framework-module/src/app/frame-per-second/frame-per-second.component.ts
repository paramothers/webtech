import { Component, OnInit, NgZone } from '@angular/core';
import { start, removeCallback, addCallback, stop } from "tns-core-modules/fps-meter";

@Component({
  selector: 'ns-frame-per-second',
  templateUrl: './frame-per-second.component.html',
  styleUrls: ['./frame-per-second.component.css'],
  moduleId: module.id,
})
export class FramePerSecondComponent implements OnInit {

  framePerSeconds: string;
  framePerMinutes: string;


  currentStatus: boolean = false;
  buttonText: string;
  callBackId :any;

  constructor(private  zone: NgZone) { }

  ngOnInit() {
  }

  toggleEvent() {

    if(this.currentStatus){


      this.buttonText = "Stop capturing";
      this.currentStatus = !this.currentStatus;
      removeCallback(this.callBackId);
      stop();

    }else{

      this.callBackId = addCallback( (framePerScond: number, minFrameinSecond) => {

        this.zone.run(
            () => {
              this.framePerSeconds = framePerScond.toFixed(2);
              this.framePerMinutes = minFrameinSecond.toFixed(2);
            }
        );
      });

      this.buttonText = "Start capturing";
      this.currentStatus = !this.currentStatus;
      start();
    }
  }
}

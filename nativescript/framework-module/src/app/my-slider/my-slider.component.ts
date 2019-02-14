import { Component, OnInit } from '@angular/core';
import {Slider} from "tns-core-modules/ui/slider";

@Component({
  selector: 'ns-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.css'],
  moduleId: module.id,
})
export class MySliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public currentValue: number = 10;
  public fontSize: number = 20;

  public onSliderValueChange(args) {
    let slider = <Slider>args.object;

    this.currentValue = slider.value;
  }

  public onSecondSliderChange(args) {
    let slider = <Slider>args.object;

    this.fontSize = slider.value;
  }
}

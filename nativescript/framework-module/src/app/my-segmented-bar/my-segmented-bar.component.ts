import { Component, OnInit } from '@angular/core';
import {SegmentedBar, SegmentedBarItem} from "tns-core-modules/ui/segmented-bar";

@Component({
  selector: 'ns-my-segmented-bar',
  templateUrl: './my-segmented-bar.component.html',
  styleUrls: ['./my-segmented-bar.component.css'],
  moduleId: module.id,
})
export class MySegmentedBarComponent implements OnInit {

  public myItems: Array<SegmentedBarItem>;
  public prop: string = "Item 1";

  constructor() {

    this.myItems = [];
    for(let i= 0; i < 5; i++){

      const item = new SegmentedBarItem();
      item.title=" Tab "+ i;
      this.myItems.push(item);
    }
  }

  ngOnInit() {
  }

  onSelectedIndexChange(args){

    let segmentBar = <SegmentedBar>args.object;
    this.prop = "Tab "+segmentBar.selectedIndex + 1;


  }

}

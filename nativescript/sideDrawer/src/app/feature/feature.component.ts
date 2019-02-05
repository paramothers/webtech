import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Location } from "@angular/common";
import {ModalDialogOptions, ModalDialogService} from "nativescript-angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {getRootView} from "tns-core-modules/application";


@Component({
  selector: 'ns-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  moduleId: module.id,
})
export class FeatureComponent implements OnInit {

  constructor(private modalService: ModalDialogService, private viewContaienrRef: ViewContainerRef) { }

  ngOnInit() {
  }

  onDrawerButtonTap():void {

    const sideDrawer = <RadSideDrawer>getRootView();
    sideDrawer.showDrawer();
  }

}

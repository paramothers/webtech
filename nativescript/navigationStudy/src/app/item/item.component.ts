import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  moduleId: module.id,
})
export class ItemComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions) { }

  ngOnInit() {
  }

  goBack(): void {
    this.routerExtension.back();
  }
}

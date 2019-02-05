import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ns-browse-root',
  templateUrl: './browse-root.component.html',
  styleUrls: ['./browse-root.component.css'],
  moduleId: module.id,
})
export class BrowseRootComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.routerExtension.navigate([{outlets:{browse:["browse"]}}], {relativeTo: this.activeRoute});
  }

}

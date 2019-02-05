import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ns-search-root',
  templateUrl: './search-root.component.html',
  styleUrls: ['./search-root.component.css'],
  moduleId: module.id,
})
export class SearchRootComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.routerExtension.navigate([{outlets: {search:["search"]}}], {relativeTo: this.activeRoute});
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'ns-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  moduleId: module.id,
})
export class BrowseComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'ns-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  moduleId: module.id,
})
export class FeatureComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}

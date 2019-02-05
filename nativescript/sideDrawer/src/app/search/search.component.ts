import { Component, OnInit } from '@angular/core';
import { View } from "tns-core-modules/ui/core/view"

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id,
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeModal(scrollView: View): void{

    scrollView.closeModal();
  }

}

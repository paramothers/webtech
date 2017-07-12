import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string='Testing of Directive and binding';
  listItems: any[] = ['Move one','Move two','Move three','Move four','Move five'];
  constructor() { }

  ngOnInit() {
  }

}

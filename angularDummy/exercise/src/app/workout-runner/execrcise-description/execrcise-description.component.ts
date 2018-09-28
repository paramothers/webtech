import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-execrcise-description',
  templateUrl: './execrcise-description.component.html',
  styles: []
})
export class ExecrciseDescriptionComponent implements OnInit {


  @Input()
  description: string;
  @Input()
  steps: string;


  constructor() { }

  ngOnInit() {
  }

}

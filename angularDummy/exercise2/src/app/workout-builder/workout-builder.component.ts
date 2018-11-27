import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="container-fluid fixed-top mt-5"> <div class="row mt-5">
  </div> <div class="row mt-2"> <div class="col-sm-12"> dfgfg <router-outlet></router-outlet>
  </div> </div> <div>`,
  styles: []
})
export class WorkoutBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

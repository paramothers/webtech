import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  // constructor for inject any other services or util
  constructor() { }

  //use for any initialization
  ngOnInit() {
  }

}

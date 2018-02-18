import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
            <p>
              hello-world works!
              Hay, Pavalan and Parithi and then padhu.
            </p>
            <h3> It is permenant </h3>
`
})
export class HelloWorldComponent implements OnInit {

  // constructor for inject any other services or util
  constructor() { }

  //use for any initialization
  ngOnInit() {
  }

}

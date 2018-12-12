import { Component, OnInit, Input, HostListener, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'abe-ajax-button',
  templateUrl: './ajax-button.component.html',
  styleUrls: ['./ajax-button.component.css']
})
export class AjaxButtonComponent implements OnInit {

  busy: boolean = null;
  @Input()
  execute: any;
  @Input()
  parameter: any;

  @ContentChild('spinner')
  spinner: ElementRef;

  @ContentChild('text')
  text: ElementRef;



  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {

    const result: any = this.execute(this.parameter);
    if (result instanceof Promise) {

      this.busy = true;
      result.then(
        () => { this.busy = null; },
        (eror: any) => { this.busy = null; }
      );
    }
  }

}

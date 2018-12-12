import { Directive, Optional, Renderer, ElementRef, HostBinding, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[abeBusyIndicator][ngModel]'
})
export class BusyIndicatorDirective {


  constructor(
    @Optional() private ngModel: NgModel,
    private element: ElementRef,
    private render: Renderer) { }


  private get validating(): boolean {
    return this.ngModel.control != null && this.ngModel.control.pending;
  }


  @HostBinding('style.borderWidth')
  get controlBorderWidth(): string {
    return this.validating ? '3px' : null;
  }

  @HostBinding('style.borderColor')
  get controlBorderColor(): string {
    return this.validating ? 'gray' : null;
  }

  @HostListener('click', ['$event.target'])
  onClick(elment: any) {
    console.log('button cliekded', elment);
  }

}

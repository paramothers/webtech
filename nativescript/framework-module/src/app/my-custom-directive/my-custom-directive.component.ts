import {Component, Directive, Inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Device, platformNames} from "tns-core-modules/platform";
import {DEVICE} from "nativescript-angular";

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
  constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
    if (device.os === platformNames.android) {
      container.createEmbeddedView(templateRef);
    }
  }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
  constructor( @Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
    if (device.os === platformNames.ios) {
      container.createEmbeddedView(templateRef);
    }
  }
}

@Component({
  selector: 'ns-my-custom-directive',
  templateUrl: './my-custom-directive.component.html',
  styleUrls: ['./my-custom-directive.component.css'],
  moduleId: module.id,
})
export class MyCustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

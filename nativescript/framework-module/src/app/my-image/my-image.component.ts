import { Component, OnInit } from '@angular/core';
import {Image} from "tns-core-modules/ui/image";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
import { ImageSource, fromBase64, fromFile } from "tns-core-modules/image-source"

const IMAGE_URL = "https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png";

@Component({
  selector: 'ns-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css'],
  moduleId: module.id,
})
export class MyImageComponent implements OnInit {

  myImageSource: Image;
  myImageSource2:ImageSource = fromFile("~/images/log.png");
  basic64ImageSource: ImageSource;


  constructor() { }

  ngOnInit() {

    const IMG_AS_BASE64 = this.myImageSource2.toBase64String("png");
    this.basic64ImageSource = fromBase64(IMG_AS_BASE64);
  }

  onLoaded(args):void {

    let stackLayout = <StackLayout>args.object;

    this.myImageSource = new Image();
    this.myImageSource.src = IMAGE_URL;
    this.myImageSource.stretch = "none";
    this.myImageSource.margin = "15";

    stackLayout.addChild(this.myImageSource);
  }

}

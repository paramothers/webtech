import { Component, OnInit } from '@angular/core';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

class DeviceInfo {

  constructor(
      public model: string,
      public deviceType: string,
      public os: string,
      public osVersion: string,
      public sdkVersion: string,
      public language: string,
      public manufacturer: string,
      public uuid: string
  ){}
}

class ScreenInfo{

  constructor(

      public heighDIPs: number,
      public heighPixels: number,
      public scale: number,
      public widthDips: number,
      public widthPixels: number
  ){}
}

@Component({
  selector: 'ns-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css'],
  moduleId: module.id,
})
export class PlatformComponent implements OnInit {

  public isItemVisible: boolean = false;
  public deviceInformation: DeviceInfo;
  public isItemVisibleScreenInfo: boolean = false;
  public screenInformation: ScreenInfo;
  public deviceInfoButton: string = "Show device indo";
  public screenInfoButton: string = "Show/Hide screen info";


  constructor() {

    this.deviceInformation = new DeviceInfo(

        device.model,
        device.model,
        device.os,
        device.osVersion,
        device.sdkVersion,
        device.language,
        device.manufacturer,
        device.uuid
    );

    this.screenInformation = new ScreenInfo(
        screen.mainScreen.heightDIPs,
        screen.mainScreen.heightPixels,
        screen.mainScreen.scale,
        screen.mainScreen.widthDIPs,
        screen.mainScreen.widthPixels
    );
  }

  ngOnInit() {
  }

  public checkPlatformType(args){

    let message = "";
    if(isAndroid){
      message = " Your are using Android device";
    }else if(isIOS){
      message = " Your are using iOS device";
    }
    alert(message);
  }

  public deviceInfo():void {

    this.isItemVisible = !this.isItemVisible;
    if(this.isItemVisible){

      this.deviceInfoButton = "Hide device info"
    }else{

      this.deviceInfoButton = "Show device info";
    }
  }



  public screenInfo(arags){

    this.isItemVisibleScreenInfo = !this.isItemVisibleScreenInfo;
    if(this.isItemVisibleScreenInfo){

      this.screenInfoButton = "Hide screen info";
    }else{
      this.screenInfoButton = "Show screen info";
    }
  }

}

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {View} from "tns-core-modules/ui/core/view";
import {LoadEventData, WebView} from "tns-core-modules/ui/web-view";
import {Label} from "tns-core-modules/ui/label";
import {TextField} from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-my-webview',
  templateUrl: './my-webview.component.html',
  styleUrls: ['./my-webview.component.css'],
  moduleId: module.id,
})
export class MyWebviewComponent implements OnInit, AfterViewInit  {

  webviewSrc:string = "https://docs.nativescript.org/";
  isEnabled: boolean= false;

  @ViewChild("myWebView")
  webViewRef: ElementRef;

  @ViewChild("labelResult")
  labelResult: ElementRef;

  @ViewChild("urlField")
  urlFild: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  goBack():void {

    let webView: WebView = this.webViewRef.nativeElement;
    if(webView.canGoBack){

      webView.goBack();
      this.isEnabled =  true;
    }
  }

  goForward():void {

    let webView: WebView = this.webViewRef.nativeElement;
    if(webView.canGoForward){
      webView.goForward();
    }else {
      this.isEnabled = false;
    }
  }

  submit(url:string){

    let textField: TextField = this.urlFild.nativeElement;
    this.isEnabled = false;
    if(url.substring(0,4) === 'http'){
       this.webviewSrc = url;
       textField.dismissSoftInput();
    }else {
      alert("Please, add `http://` or `https://` in front of the URL string");
    }

  }

  ngAfterViewInit(): void {

    let webView: WebView = this.webViewRef.nativeElement;
    let lebel: Label = this.labelResult.nativeElement;
    lebel.text = "Still loading";

    webView.on(WebView.loadFinishedEvent, function(args: LoadEventData){

      let message;
      if (!args.error) {
        message = "WebView finished loading of " + args.url;
      } else {
        message = "Error loading " + args.url + ": " + args.error;
      }

      lebel.text = message;
      console.log("WebView message - " + message);

    });




  }

}

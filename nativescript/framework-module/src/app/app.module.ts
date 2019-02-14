import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FileSystemComponent } from './file-system/file-system.component';
import {NativeScriptFormsModule} from "nativescript-angular";
import { FramePerSecondComponent } from './frame-per-second/frame-per-second.component';
import { HttpApiComponent } from './http-api/http-api.component';
import {MyHttpService} from "~/app/http-api/my-http.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { PlatformComponent } from './platform/platform.component';
import { MyTraceComponent } from './my-trace/my-trace.component';
import { MyHtmlViewComponent } from './my-html-view/my-html-view.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyListPickerComponent } from './my-list-picker/my-list-picker.component';
import {MyGestureComponent} from "~/app/my-gesture/my-gesture.component";
import { MyIceIconsComponent } from './my-ice-icons/my-ice-icons.component';
import { MyListViewComponent } from './my-list-view/my-list-view.component';
import { MyCustomListViewComponent } from './my-custom-list-view/my-custom-list-view.component';
import { MyProgresComponent } from './my-progres/my-progres.component';
import { MySearchbarComponent } from './my-searchbar/my-searchbar.component';
import { MySliderComponent } from './my-slider/my-slider.component';
import { MySwitchComponent } from './my-switch/my-switch.component';
import { MySegmentedBarComponent } from './my-segmented-bar/my-segmented-bar.component';
import { MyWebviewComponent } from './my-webview/my-webview.component';
import { MyTextViewComponent } from './my-text-view/my-text-view.component';
import {MyTextFieldComponent} from "~/app/my-text-field/my-text-field.component";
import { MyTimePickerComponent } from './my-time-picker/my-time-picker.component';
import {
    IfAndroidDirective,
    IfIosDirective,
    MyCustomDirectiveComponent
} from './my-custom-directive/my-custom-directive.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        FileSystemComponent,
        FramePerSecondComponent,
        HttpApiComponent,
        PlatformComponent,
        MyTraceComponent,
        MyHtmlViewComponent,
        MyImageComponent,
        MyListPickerComponent,
        MyGestureComponent,
        MyIceIconsComponent,
        MyListPickerComponent,
        MyListViewComponent,
        MyCustomListViewComponent,
        MyProgresComponent,
        MySearchbarComponent,
        MySliderComponent,
        MySwitchComponent,
        MySegmentedBarComponent,
        MyWebviewComponent,
        MyTextViewComponent,
        MyTextFieldComponent,
        MyTimePickerComponent,
        MyCustomDirectiveComponent,
        IfIosDirective,
        IfAndroidDirective

    ],
    providers: [MyHttpService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {FileSystemComponent} from "./file-system/file-system.component";
import {FramePerSecondComponent} from "./frame-per-second/frame-per-second.component";
import {PlatformComponent} from "~/app/platform/platform.component";
import {MyTraceComponent} from "~/app/my-trace/my-trace.component";
import {MyGestureComponent} from "~/app/my-gesture/my-gesture.component";
import {MyListPickerComponent} from "~/app/my-list-picker/my-list-picker.component";
import {MySliderComponent} from "~/app/my-slider/my-slider.component";
import {MySwitchComponent} from "~/app/my-switch/my-switch.component";
import {MySegmentedBarComponent} from "~/app/my-segmented-bar/my-segmented-bar.component";
import {MySearchbarComponent} from "~/app/my-searchbar/my-searchbar.component";
import {MyProgresComponent} from "~/app/my-progres/my-progres.component";
import {MyListViewComponent} from "~/app/my-list-view/my-list-view.component";
import {MyTextViewComponent} from "~/app/my-text-view/my-text-view.component";
import {MyTextFieldComponent} from "~/app/my-text-field/my-text-field.component";
import {MyTimePickerComponent} from "~/app/my-time-picker/my-time-picker.component";
import {MyWebviewComponent} from "~/app/my-webview/my-webview.component";
import {MyCustomDirectiveComponent} from "~/app/my-custom-directive/my-custom-directive.component";

const routes: Routes = [
    { path: "", redirectTo: "/customDirective", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "filesystem", component: FileSystemComponent },
    { path: "framePerSeconds", component: FramePerSecondComponent },
    { path: "mysearchbar", component: MySearchbarComponent },
    { path: "mytextfield", component: MyTextViewComponent },
    { path: "mytextfield2", component: MyTextFieldComponent },
    { path: "customDirective", component: MyCustomDirectiveComponent },
    { path: "myprogress", component: MyProgresComponent },
    { path: "mylistview", component: MyListViewComponent },
    { path: "segmentedTab", component: MySegmentedBarComponent },
    { path: "platform", component: PlatformComponent },
    { path: "trace", component: MyTraceComponent },
    { path: "guesture", component: MyGestureComponent },
    { path: "listpicker", component: MyListPickerComponent },
    { path: "myslider", component: MySliderComponent },
    { path: "myswitch", component: MySwitchComponent },
    { path: "mywebview", component: MyWebviewComponent },
    { path: "mytimepicker", component: MyTimePickerComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

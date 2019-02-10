import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {ActiveIndicatorComponent} from "~/app/active-indicator/active-indicator.component";
import {AnimateSecondComponent} from "~/app/animate-second/animate-second.component";
import {AnimateThirdComponent} from "~/app/animate-third/animate-third.component";
import {DatePickerComponent} from "~/app/date-picker/date-picker.component";
import {MyDialogComponent} from "~/app/my-dialog/my-dialog.component";
import {MyFormattedTextComponent} from "~/app/my-formatted-text/my-formatted-text.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ActiveIndicatorComponent,
        AnimateSecondComponent,
        AnimateThirdComponent,
        DatePickerComponent,
        MyDialogComponent,
        MyFormattedTextComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

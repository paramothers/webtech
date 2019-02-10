import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnimateSecondComponent } from './animate-second/animate-second.component';
import { AnimateThirdComponent } from './animate-third/animate-third.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MyFormattedTextComponent } from './my-formatted-text/my-formatted-text.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import {ActiveIndicatorComponent} from "~/app/active-indicator/active-indicator.component";
import {AnimateSecondComponent} from "~/app/animate-second/animate-second.component";
import {AnimateThirdComponent} from "~/app/animate-third/animate-third.component";
import {DatePickerComponent} from "~/app/date-picker/date-picker.component";
import {MyDialogComponent} from "~/app/my-dialog/my-dialog.component";
import {MyFormattedTextComponent} from "~/app/my-formatted-text/my-formatted-text.component";

const routes: Routes = [
    { path: "", component: MyFormattedTextComponent},
    { path: "animate-chain", component: AnimateSecondComponent},
    { path: "activeIndicator", component: ActiveIndicatorComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }

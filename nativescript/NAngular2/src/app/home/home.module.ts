import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {MessageComponent} from "~/app/message/message.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {HomePlaceholderComponent} from "~/app/home-placeholder/home-placeholder.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HomeComponent,
        MessageComponent,
        HomePlaceholderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

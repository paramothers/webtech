import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ItemComponent} from "~/app/item/item.component";
import {BrowseComponent} from "~/app/browse/browse.component";
import {SearchComponent} from "~/app/search/search.component";
import {CategoryComponent} from "~/app/category/category.component";
import {FeatureComponent} from "~/app/feature/feature.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        FeatureComponent,
        ItemComponent,
        BrowseComponent,
        CategoryComponent,
        SearchComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

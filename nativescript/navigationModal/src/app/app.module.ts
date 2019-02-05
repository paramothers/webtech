import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HubComponent } from './hub/hub.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './search/search.component';
import { FeatureComponent } from './feature/feature.component';
import { SearchRootComponent } from './search-root/search-root.component';
import { BrowseRootComponent } from './browse-root/browse-root.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    entryComponents:[
        SearchRootComponent,
        BrowseRootComponent
    ],
    declarations: [
        AppComponent,
        HubComponent,
        CategoryComponent,
        ItemComponent,
        BrowseComponent,
        SearchComponent,
        FeatureComponent,
        SearchRootComponent,
        BrowseRootComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

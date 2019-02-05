import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {FeatureComponent} from "~/app/feature/feature.component";
import {ItemComponent} from "~/app/item/item.component";
import {BrowseComponent} from "~/app/browse/browse.component";
import {SearchComponent} from "~/app/search/search.component";
import {CategoryComponent} from "~/app/category/category.component";

const routes: Routes = [
    { path: "", redirectTo: "/featured", pathMatch: "full" },
    { path: "featured", component: FeatureComponent },
    { path: "item", component: ItemComponent},
    { path: "browse", component: BrowseComponent},
    { path: "search", component: SearchComponent},
    { path: "category", component: CategoryComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

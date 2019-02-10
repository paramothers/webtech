import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {FeatureComponent} from "~/app/feature-module/feature.component";
import {FeatComponent} from "~/app/feature-module/feat.component";


const routes: Routes = [
    { path: "", component: FeatureComponent , outlet:"feat"},
    { path: "itemsTemp", component: FeatComponent, outlet:"feat" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeatureRoutingModule { }

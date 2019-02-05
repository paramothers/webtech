import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {HubComponent} from "~/app/hub/hub.component";
import {ItemComponent} from "~/app/item/item.component";
import {BrowseComponent} from "~/app/browse/browse.component";
import {CategoryComponent} from "~/app/category/category.component";
import {SearchComponent} from "~/app/search/search.component";
import {FeatureComponent} from "~/app/feature/feature.component";

const routes: Routes = [

    {path: "", redirectTo: "/(featured:featured//browse:browse//search:search)", pathMatch: "full"},
    {path: "hub", component: HubComponent},

    {path: "item", component: ItemComponent, outlet:"featured"},
    {path: "featured", component: FeatureComponent, outlet:"featured"},

    {path: "browse", component: BrowseComponent, outlet:"browse"},
    {path: "category", component: CategoryComponent, outlet:"browse"},
    {path: "item", component: ItemComponent, outlet:"browse"},

    {path: "search", component: SearchComponent, outlet:"search"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}

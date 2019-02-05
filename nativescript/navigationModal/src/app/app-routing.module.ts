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

    {path: "", redirectTo: "/featured", pathMatch: "full"},


    {path: "featured", component: FeatureComponent, children: [
            {path: "browse", component: BrowseComponent, outlet:"browse"},
            {path: "category", component: CategoryComponent, outlet:"browse"},
            {path: "item", component: ItemComponent, outlet:"browse"},
            {path: "search", component: SearchComponent, outlet:"search"}
        ]
    },
    {path: "item", component: ItemComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {FileSystemComponent} from "./file-system/file-system.component";
import {FramePerSecondComponent} from "./frame-per-second/frame-per-second.component";
import {PlatformComponent} from "~/app/platform/platform.component";
import {MyTraceComponent} from "~/app/my-trace/my-trace.component";

const routes: Routes = [
    { path: "", redirectTo: "/trace", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "filesystem", component: FileSystemComponent },
    { path: "framePerSeconds", component: FramePerSecondComponent },
    { path: "platform", component: PlatformComponent },
    { path: "trace", component: MyTraceComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

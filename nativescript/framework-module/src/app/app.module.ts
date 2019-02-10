import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FileSystemComponent } from './file-system/file-system.component';
import {NativeScriptFormsModule} from "nativescript-angular";
import { FramePerSecondComponent } from './frame-per-second/frame-per-second.component';
import { HttpApiComponent } from './http-api/http-api.component';
import {MyHttpService} from "~/app/http-api/my-http.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { PlatformComponent } from './platform/platform.component';
import { MyTraceComponent } from './my-trace/my-trace.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        FileSystemComponent,
        FramePerSecondComponent,
        HttpApiComponent,
        PlatformComponent,
        MyTraceComponent
    ],
    providers: [MyHttpService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

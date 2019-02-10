import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {FeatureComponent} from "~/app/feature-module/feature.component";
import {FeatureRoutingModule} from "~/app/feature-module/feature-routing.module";
import {FeatComponent} from "~/app/feature-module/feat.component";

@NgModule({
  declarations: [FeatureComponent,FeatComponent],
  imports: [
    NativeScriptCommonModule,
    FeatureRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureModuleModule { }

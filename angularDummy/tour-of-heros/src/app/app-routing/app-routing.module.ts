import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HerosComponent } from '../heros/heros.component';

const routes: Routes = [{ path: "heroes", component: HerosComponent }];

@NgModule({
  exports: [RouterModule],
  imports : [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'app-friends-about', component: AboutComponent, pathMatch: 'full'  },
  { path: '**', redirectTo: 'app-friends-page-not-found'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonModuleRoutingModule { }

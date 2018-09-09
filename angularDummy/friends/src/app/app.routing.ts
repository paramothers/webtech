import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "app-friends-about", component: AboutComponent, pathMatch: 'full'  },
  { path: "**", redirectTo: 'app-friends-page-not-found'  }
]; 

@NgModule ({

  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting {
}

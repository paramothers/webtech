import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const ROUTES: Routes = [
    {path: '', redirectTo: '/app-friends-userprofile', pathMatch: 'full'},
    {path: 'app-friends-userprofile', component: UserProfileComponent}

];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class UserRoutingModule {
}

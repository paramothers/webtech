import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@Angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { UserRoutingModule } from './user-route-module';
import { UserFriendsComponent } from './components/user-friends/user-friends.component';
import { UtilModuleModule } from '../util-module/util-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    UtilModuleModule
  ],
  declarations: [
    UserProfileComponent,
    EditDialogComponent,
    UserFriendsComponent
  ]
})
export class UserModuleModule { }

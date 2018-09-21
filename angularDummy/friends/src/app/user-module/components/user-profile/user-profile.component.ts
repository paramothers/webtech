import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AuthenticationServiceService } from '../../../authentication-module/services/AuthenticationServiceService';
import { UserService } from '../../services/user.service';
import { EditType } from '../edit-dialog/EditDetails';
import { User } from '../../domains/User';

@Component({
    selector: 'app-friends-userprofile',
    styleUrls: ['user-profile.component.sass'],
    templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

    profileImage: any = '../../../assets/images/person_edit.png';

    user: User;

    @ViewChild(EditDialogComponent) editDialog: EditDialogComponent;

    constructor(private authService: AuthenticationServiceService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.user = this.userService.getSavedUser().getValue();
    }

    onLogout(): void {
        this.authService.signout().then(() => {
            this.navigateToLogin();
        });
    }

    navigateToLogin() {
        this.router.navigateByUrl('/app-friends-login');
    }

    onNameChange() {
        this.editDialog.setTitle('Do you want to edit name?')
            .setBodyTitle('name')
            .setBodyLabel('Enter new name')
            .setEditType(EditType.NAME)
            .show();
    }

    onEmailChange() {
        this.editDialog.setTitle('Do you want to edit email?')
            .setBodyTitle('email')
            .setBodyLabel('Enter new email')
            .setEditType(EditType.EMAIL)
            .show();
    }

    onMobileChange() {
        this.editDialog.setTitle('Do you want to edit mobile?')
            .setBodyTitle('mobile')
            .setBodyLabel('Enter new mobile')
            .setEditType(EditType.MOBILE)
            .show();
    }

    onPasswordChange() {
        this.editDialog.setTitle('Do you want to edit password?')
            .setBodyTitle('password')
            .setBodyLabel('Enter new password')
            .setEditType(EditType.PASSWORD)
            .show();
    }

    onPersonEdit(event) : void {
      const selectedFiles: FileList = event.target.files;
      const file = selectedFiles.item(0);
      this.userService.addProfileImage(this.user, file);
    }
}

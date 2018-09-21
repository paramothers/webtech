import {Component} from '@angular/core';
import {EditDetails, EditType} from './EditDetails';
import { UserService } from '../../services/user.service';
import { AuthenticationServiceService } from '../../../authentication-module/services/AuthenticationServiceService';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
})
export class EditDialogComponent {
    isVisible: boolean;

    titleMessage: string;

    bodyTitle: string;

    bodyLabel: string;

    editType: EditType;

    editDetails: EditDetails;

    constructor(private authService: AuthenticationServiceService,
                private userService: UserService) {
        this.editDetails = new EditDetails(authService, userService);
    }

    public setTitle(title: string): EditDialogComponent {
        this.titleMessage = title;
        return this;
    }

    public setBodyTitle(bodyTitle: string): EditDialogComponent {
        this.bodyTitle = bodyTitle;
        return this;
    }

    public setBodyLabel(bodyLabel: string): EditDialogComponent {
        this.bodyLabel = bodyLabel;
        return this;
    }

    public setEditType(editType: EditType): EditDialogComponent {
        this.editType = editType;
        return this;
    }


    public show() {
        this.isVisible = true;
    }

    public hide() {
        this.isVisible = false;
    }

    private onSubmit(editFormData): void {
        this.editDetails.edit(this.editType, editFormData.value.editValue);
    }
}

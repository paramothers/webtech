import {Component, OnInit} from '@angular/core';
import {TextField} from "tns-core-modules/ui/text-field";

@Component({
    selector: 'ns-my-text-view',
    templateUrl: './my-text-view.component.html',
    styleUrls: ['./my-text-view.component.css'],
    moduleId: module.id,
})
export class MyTextViewComponent implements OnInit {

    public birthDate = "1288323623006";

    constructor() {
    }

    ngOnInit() {
    }

    private firstIfLoaded(args): void {

        let textField = <TextField>args.object;
        setTimeout(() => {

            textField.focus();
        }, 200);
    }

    private onRetrunPress(args): void {

        let textField = <TextField>args.object;
        console.log("hint ",textField.hint);
        console.log("text ",textField.text);
        console.log("secure ",textField.secure);
        console.log("keyboardType ",textField.keyboardType);
        console.log("returnKey ",textField.returnKeyType);
        console.log("autoCapilization ",textField.autocapitalizationType);
        console.log("updateTrigger ",textField.updateTextTrigger);
        console.log("editable ",textField.editable);
        console.log("autocorrect ",textField.autocorrect);
        console.log("maxlength ",textField.maxLength);

        setTimeout(()=> {
            textField.dismissSoftInput();
        },200)
    }

    private onFocus(args): void {

        let textField = <TextField>args.object;
        console.log("text ", textField.text);
    }

    private onBlur(args): void {

        let textField = <TextField>args.object;
        console.log("text ", textField.text);
    }

    private onTextChange(args):void {
        let textField = <TextField>args.object;
        console.log("textchange ", textField.text);
    }

    private onTap(text:string):void{

        console.log("textchange ",text);

        alert(text);
    }

}

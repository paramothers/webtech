import {Component, OnInit} from '@angular/core';
import {
    action,
    confirm,
    inputType,
    login,
    LoginResult,
    PromptOptions,
    PromptResult,
    prompt,
    LoginOptions
} from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'ns-my-dialog',
    templateUrl: './my-dialog.component.html',
    styleUrls: ['./my-dialog.component.css'],
    moduleId: module.id,
})
export class MyDialogComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    openDialog() {

        let option = {
            title: "Race Selection",
            message: "Choose your Race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        }

        action(option).then( (result)=> {console.log("result ", result);})
    }

    openCompletedDialog() {

        let option = {
            title: "Race condtion",
            message: "Given action has completed",
            okButtonText: "okee"
        };

        action(option).then(
            ()=> console.log("action completed")
        );

    }

    openConfirmDialog() {

        let option = {

            title:"Double Check",
            message:"Are you okay to be happy",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText:"Cancel"
        };

        confirm (option).then((result: boolean)=>{ console.log("result ",result)});
    }

    openPromptDialog() {

        let options: PromptOptions =  {

            title:"Login Please",
            defaultText: "enter you mood",
            message:"How are you doing",
            inputType: inputType.text,
            okButtonText:"Login",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutural",
            cancelable: true
        };
        prompt(options).then( (loginResult: PromptResult)=>{
            console.log("result of login ", loginResult.result);
        });
    }

    openLoginDialog() {
        let optons : LoginOptions = {

            title: "Login Please",
            message: "Enter your credential",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            neutralButtonText: "Neutral",
            userNameHint:"Enter your Name",
            passwordHint:"Enter PAsssword",
            userName:"pppp",
            password:"ouiouuop"
        }

        login(optons).then( (loginResult: LoginResult) => { console.log("login ",loginResult.result)});
    }
}

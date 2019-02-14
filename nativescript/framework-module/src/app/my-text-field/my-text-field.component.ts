import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-my-text-field',
  templateUrl: './my-text-field.component.html',
  styleUrls: ['./my-text-field.component.css'],
  moduleId: module.id,
})
export class MyTextFieldComponent implements OnInit {

  buttonText: string;
  editableStage: boolean = false;
  textViewValue: string;

  constructor() { }

  ngOnInit() {
  }

  toggleTextView():void {

    if(this.editableStage){

      this.editableStage = !this.editableStage;
      this.buttonText ="Diable text field";
    }else{
      this.editableStage = !this.editableStage;
      this.buttonText ="Enable text field";
    }
  }

  showText():void {

    alert(this.textViewValue);
  }

}

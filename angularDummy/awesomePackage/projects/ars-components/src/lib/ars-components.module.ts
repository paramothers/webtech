import { NgModule } from '@angular/core';
import { ArsComponentsComponent } from './ars-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';

@NgModule({
  imports: [
  ],
  declarations: [ArsComponentsComponent, CheckboxComponent, TextinputComponent],
  exports: [ArsComponentsComponent, CheckboxComponent, TextinputComponent]
})
export class ArsComponentsModule { }

import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[passwordEqual][formControlName],[passwordEqual][formControl],[passwordEqual][ngModel]',
  providers: [
      {provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordEqualValidatorDirective), multi: true}
  ]
})
export class PasswordEqualValidatorDirective implements Validator {

  constructor(@Attribute('passwordEqual') public passwordEqual: string) { }

  validate(control: AbstractControl): { [key: string]: any } {

    let retypePassword = control.value;
    let originalPassword = control.root.get(this.passwordEqual);

    return (originalPassword && retypePassword !== originalPassword.value) ? { passwordEqual: false } : null;

  }
}

import {AbstractControl, FormGroup, Validators} from "@angular/forms";

export const minLen = (control: AbstractControl) => {
  const controlValue = control.value;
  if (controlValue.length >= 10) {
  return null
  }
  return {
    minLengthTen: true
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup): any => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

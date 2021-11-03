import {AbstractControl} from "@angular/forms";

export const minLen = (control: AbstractControl) => {
  console.log('222', control)
  const controlValue = control.value;
  if (controlValue.length >= 10) {
    return null
  }
  return {
    minLengthTen: true
  }
}

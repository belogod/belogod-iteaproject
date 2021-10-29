import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPositiveNumbers]'
})
export class PositiveNumbersDirective {

  @Input() regex: string;

  public regexPositiveNumbers: RegExp = new RegExp(/^-?[13579]+(\.[13579]*){0,1}$/g);
  public regexAllNumbers: RegExp = new RegExp(/^-?[1234567890]{0,1}$/g);

  private specialKeys: Array<string> = ['Backspace', 'Tab'];

  constructor(
    private el: ElementRef
  ) {
  }

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (this.regex === 'all') {
      if (next && !String(next).match(this.regexAllNumbers)) {
        event.preventDefault();
      }
    } else {
      if (next && !String(next).match(this.regexPositiveNumbers)) {
        event.preventDefault();
      }
    }

  }

}

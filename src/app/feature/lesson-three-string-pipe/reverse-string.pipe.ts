import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, param?: any): any {
    if (param != 0) {
      return value.split('').slice(0, param).reverse().concat(value.split('').slice(param)).join('');
    } else {
      return value.split("").reverse().join("");
    }
  }

}

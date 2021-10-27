import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeString'
})
export class ThreeStringPipe implements PipeTransform {

  transform(str: string): string {
    let reversed = '';
    for (let character of str){
      reversed = character + reversed;
    }

    return reversed;
  }

}

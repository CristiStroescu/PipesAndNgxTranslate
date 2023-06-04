import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe'
})
export class TitleCasePipePipe implements PipeTransform {

  transform(value: string): any {
    if(!value.length) return null;
    return value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
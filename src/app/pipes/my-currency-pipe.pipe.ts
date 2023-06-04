import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrencyPipe',
})
export class MyCurrencyPipePipe implements PipeTransform {
  transform(value: string): any {
    if(!value.length) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(Number(value));
  }
}
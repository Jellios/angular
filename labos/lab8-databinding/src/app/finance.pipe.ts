import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finance'
})
export class FinancePipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if (!value)
    {
      return "";
    }
    return currency + " " + value;
  }

}

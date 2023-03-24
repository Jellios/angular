import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumary'
})
export class SumaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value)
    {
      return "";
    }
    const actualLimit = (limit) ? limit : 50;
    return value.substr(0,actualLimit) + '...';
    
  }

}

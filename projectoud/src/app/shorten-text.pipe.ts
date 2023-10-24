import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value) {
      return "";
    }
    const realLimit = (limit)? limit : 150;
    return value.substring(0, realLimit);
  }

}

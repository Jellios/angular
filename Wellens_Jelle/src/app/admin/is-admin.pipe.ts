import { Pipe, PipeTransform } from '@angular/core';
import { UserInfo } from '../user-info';

@Pipe({
  name: 'isAdmin'
})
export class IsAdminPipe implements PipeTransform {
  transform(x: UserInfo): any {
    return x.isAdmin ? 'list-group-item-success' : 'list-group-item-danger';
  }
}

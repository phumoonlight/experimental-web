import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'apiStatus'
})
export class ApiStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'online' : 'offline'
  }
}

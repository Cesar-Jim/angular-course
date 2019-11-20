import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {

    const show = value;
    let hide = '';

    if (activar) {
      for (let i = 0; i < show.length; i++) {
        hide += '*';
      }
      return hide;
    } else {
      return show;
    }
  }

}

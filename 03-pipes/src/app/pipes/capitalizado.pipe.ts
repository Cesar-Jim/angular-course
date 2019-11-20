import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {

    // console.log(value);
    // console.log(args);

    value = value.toLowerCase();
    let palabras = value.split(' ');

    if (todas) {
      for (const i in palabras) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
      }
    } else {
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'CesarJimenez';
  nombreCompleto = 'ceSar ignacio jiménEZ gOMes riBeIrO';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.839;
  sueldo = 27554.38;
  sueldoDos = 27554.3;

  personaje = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 65
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {

    setTimeout(() => resolve('Llegaron los datos!'), 3500);
  });

  fecha = new Date();

  activar = true;

}

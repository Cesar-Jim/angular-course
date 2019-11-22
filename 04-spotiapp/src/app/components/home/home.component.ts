import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((datos: any) => {
        // console.log(datos);
        this.nuevasCanciones = datos;
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        if (this.mensajeError === 'The access token expired') {
          this.mensajeError += '. Generar nuevo token usando postman o yendo al sitio de desarrolladores de spotify.';
        }
      });
  }

  // ejercicio muestra de petición de paises desde restcountries.eu
  // paises: any[] = [];

  // constructor(private http: HttpClient) {

  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((resp: any[]) => {
  //       this.paises = resp;
  //       console.log(resp);
  //     });
  // }

}

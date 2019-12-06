import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/classes/marcador.class";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MapaEditarComponent } from "./mapa-editar.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  lat = 19.517733260248328;
  lng = -99.2298457341351;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.marcadores.push(new Marcador(this.lat, this.lng));
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {}

  agregarMarcador(evento) {
    // console.log("evento: ", e);
    // console.log("latitud: ", e.coords.lat);
    // console.log("longitud: ", e.coords.lng);

    const coordinates: { lat: number; lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coordinates.lat, coordinates.lng);
    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    this._snackBar.open("Marcador agregado", "Cerrar", { duration: 3000 });
  }

  borrarMarcador(i) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this._snackBar.open("Marcador borrado", "Cerrar", { duration: 3000 });
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: "250px",
      data: { titulo: marcador.titulo, desc: marcador.descripcion }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      marcador.titulo = result.titulo;
      marcador.descripcion = result.desc;
      this.guardarStorage();
      this._snackBar.open("Marcador actualizado", "Cerrar", { duration: 3000 });
    });
  }

  guardarStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}

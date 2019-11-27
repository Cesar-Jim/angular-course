import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: []
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  };

  paises = [
    {
      codigo: "MEX",
      nombre: "Mexico"
    },
    {
      codigo: "BRA",
      nombre: "Brasil"
    }
  ];

  sexos: string[] = ["Hombre", "Mujer", "Indefinido"];

  constructor() {}
  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("Valor forma", forma.value);

    console.log("usuario", this.usuario);
  }
}

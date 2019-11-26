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
    correo: null
  };

  constructor() {}
  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("Valor forma", forma.value);

    console.log("usuario", this.usuario);
  }
}

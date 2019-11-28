import { Component } from "@angular/core";

// Importaciones necesarias para el manejo de formularios
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { Observable } from "rxjs";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  // elemento que será responsable del manejo de la forma completamente:
  forma: FormGroup;

  // usando un objeto más complejo
  usuario: any = {
    nombreCompleto: {
      nombre: "Cesar",
      apellido: "Jimenez"
    },
    correo: "cijgr@hotmail.com",
    pasatiempos: ["correr", "dormir", "comer"]
  };

  // en el constructor se define toda la lógica
  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [
          Validators.required,
          Validators.minLength(3),
          this.noJimenez
        ])
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
        new FormControl("correr", Validators.required)
      ]),
      username: new FormControl("", Validators.required, this.existeUsuario),
      password1: new FormControl("", Validators.required),
      password2: new FormControl()
    });

    // cargando los datos al formulario a partir de un objeto:
    // this.forma.setValue(this.usuario);

    // validando passwords
    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.passwordsDiferentes.bind(this.forma)
    ]);

    // observar cambios en el formulario on the fly en cualquier input de la forma
    // this.forma.valueChanges.subscribe(datos => {
    //   console.log(datos);
    // });

    // observar cambios en el formulario on the fly en inputs específicos
    this.forma.controls["username"].valueChanges.subscribe(datos => {
      console.log(datos);
    });

    // observar cambios en el estado de validez del formulario on the fly
    this.forma.controls["username"].statusChanges.subscribe(datos => {
      console.log(datos);
    });
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls["pasatiempos"]).push(
      new FormControl("", Validators.required)
    );
  }

  // ejemplo de validación personalizada
  // No permite poner jimenez en el campo apellido
  noJimenez(control: FormControl): { [s: string]: boolean } {
    if (control.value === "jimenez") {
      return {
        nojimenez: true
      };
    }
    return null;
  }

  // validación de passwords
  passwordsDiferentes(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;

    if (control.value !== forma.controls["password1"].value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  // ejemplo de validación asíncrona ligada al username
  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "strider") {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });

    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    // regresando el formulario a su valor pristine (como nuevo) con reset:
    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });

    // otra manera de resetear el formulario (no recomendada):
    // this.forma.controls.nombreCompleto['nombre'].setValue('');
  }
}

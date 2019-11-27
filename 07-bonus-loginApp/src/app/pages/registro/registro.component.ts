import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

// modelos
import { UsuarioModel } from "../../models/usuario.model";

// servicios
import { AuthService } from "src/app/services/auth.service";

// sweet alert 2
import Swal from "sweetalert2";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel; // instancia no inicializada de UsuarioModel
  recordarUsuario = false;

  constructor(private auth: AuthService, private router: Router) {}

  // INIT
  ngOnInit() {
    this.usuario = new UsuarioModel(); // aquí es donde se inicializa la instacia usuario
  }

  // METODOS
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      title: "Info",
      text: "Espere por favor..."
    });

    this.auth.nuevoUsuario(this.usuario).subscribe(
      resp => {
        // console.log(resp);
        Swal.close();

        if (this.recordarUsuario) {
          localStorage.setItem("email", this.usuario.email);
        }

        this.router.navigateByUrl("/home");
      },
      err => {
        // console.log(err.error.error.message);
        Swal.fire({
          title: "Error al registrar",
          icon: "error",
          confirmButtonText: "OK",
          text: err.error.error.message
        });
      }
    );

    // console.log("Formulario enviado!");
    // console.log(this.usuario);
    // console.log(form);
  }
}

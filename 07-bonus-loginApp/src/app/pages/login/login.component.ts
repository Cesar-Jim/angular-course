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
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel; // declaro la propiedad usuario
  recordarUsuario = false;

  constructor(private auth: AuthService, private router: Router) {}

  // INIT
  ngOnInit() {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem("email")) {
      this.usuario.email = localStorage.getItem("email");
      this.recordarUsuario = true;
    }
  }

  // LOGIN:
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      title: "Info",
      text: "Espere por favor..."
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      resp => {
        console.log(resp); // el token se obtiene de esta respuesta
        Swal.close();

        if (this.recordarUsuario) {
          localStorage.setItem("email", this.usuario.email);
        }

        this.router.navigateByUrl("/home");
      },
      err => {
        // console.log(err.error.error.message);
        Swal.fire({
          title: "Error al autenticar",
          icon: "error",
          confirmButtonText: "OK",
          text: err.error.error.message
        });
      }
    );

    // console.log(this.usuario);
    // console.log(form);
  }
}

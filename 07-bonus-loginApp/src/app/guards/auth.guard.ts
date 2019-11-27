import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  // UN GUARD ES UN SIMPLE SERVICIO QUE IMPLEMENTA EL CANACTIVATE (QUE VIENE DEL ANGULAR ROUTER)
  // CANACTIVATE CONFIRMA SI UNA RUTA SE PUEDE ACTIVAR O NO
  // NEXT CONTIENE CUAL ES LA SIGUIENTE RUTA A LA CUAL EL USUARIO QUIERE NAVEGAR
  // EL STATE ES EL ESTADO ACTUAL DE LA RUTA

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}

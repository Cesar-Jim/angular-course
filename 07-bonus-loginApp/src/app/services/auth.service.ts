// Este servicio maneja todo lo relacionado a la autenticacion
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

// operators
import { map } from "rxjs/operators";

// No necesito importarlo en app.module porque ya esta proveido de manera global mediante la propiedad del decorador providedIn: root
@Injectable({
  providedIn: "root"
})
export class AuthService {
  // voy a usar 2 servicios: 1: para crear usuarios y 2: para el login

  // crear nuevo usuario:
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login:
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = ""; // REQUIRES A VALID API KEY FROM FIREBASE FOR THE APP TO WORK
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  // servicios que seran llamados
  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http
      .post(
        `${this.url}signInWithPassword?key=${this.apiKey}`,
        authData // authData = payload o cuerpo de la peticion
      )
      .pipe(
        map(resp => {
          // console.log("entro en el map del rxjs");
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    // const authData = {
    //   email: usuario.email,
    //   password: usuario.password,
    //   returnSecureToken: true
    // };

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    // como necesito subscribirme a otro lugar, debo mandar el siguiente return:
    return this.http
      .post(`${this.url}signUp?key=${this.apiKey}`, authData) // authData = payload o cuerpo de la peticion
      .pipe(
        map(resp => {
          console.log("entro en el map del rxjs");
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      ); // en caso de error en la peticion, el map en el pipe nunca se ejecutara
  }

  logout() {
    localStorage.removeItem("token");
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);

    // manejo de la expiracion del token
    let hoy = new Date();
    hoy.setSeconds(3600); // hoy, pero dentro de 1 hora
    localStorage.setItem("expira", hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem("expira"));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}

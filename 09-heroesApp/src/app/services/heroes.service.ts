import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// importar el modelo heroe
import { HeroeModel } from "../models/heroe.model";

// importar el map para trabajar con ids
import { map, delay } from "rxjs/operators"; // map sirve para transformar lo que un observador puede regresar

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  private url: string = "https://heroes-crud-c88b8.firebaseio.com";

  constructor(private http: HttpClient) {}

  // funciones CRUD del servicio heroes:

  // CREAR
  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        // el map se usa para que la respuesta devuelva a todo el objeto heroe con su ID incluido, si no, solo devolveria el ID
        heroe.id = resp.name;
        return heroe;
      })
    ); // se pone .json para decirle a firebase que utilice su REST api. esta peticion devuelve el ID del heroe
  }

  // EDITAR
  editarHeroe(heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp); // no es obligatorio poner los .json
  }

  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  // GET HEROES
  getHeroes() {
    return this.http
      .get(`${this.url}/heroes.json`)
      .pipe(map(this.crearArreglo), delay(1500));
  }

  private crearArreglo(heroesObj: object) {
    const heroes: HeroeModel[] = [];

    // console.log(heroesObj);

    // en caso de que no exista ningun registro:
    if (heroesObj === null) {
      return [];
    }

    // en caso de que si existan registros:
    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    return heroes;
  }

  // DELETE heroes
  borrarHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}

import { Component, OnInit } from "@angular/core";

// importar el sevicio para operaciones CRUD del componente heroe
import { HeroesService } from "src/app/services/heroes.service";

// importar el modelo de heroe
import { HeroeModel } from "src/app/models/heroe.model";

// importar sweetalert2
import Swal from "sweetalert2";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  heroes: HeroeModel[] = [];
  cargando = false;

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(respuesta => {
      this.heroes = respuesta;
      this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      icon: "question",
      title: "Eliminar",
      text: `Seguro que deseas borrar a ${heroe.nombre}?`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroe(heroe.id).subscribe();
      }
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HeroeModel } from "src/app/models/heroe.model";

// importar el sevicio para operaciones CRUD del componente heroe
import { HeroesService } from "src/app/services/heroes.service";

// importar sweetalert2
import Swal from "sweetalert2";

// importar para trabajar el loading y close de sweetalert2
import { Observable } from "rxjs";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent implements OnInit {
  // definimos una nueva propiedad
  heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== "nuevo") {
      this.heroesService.getHeroe(id).subscribe((resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
        // console.log(resp);
      });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario no valido");
      return;
    }

    Swal.fire({
      icon: "info",
      title: "Espera",
      text: "Guardando heroe",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      // editar un heroe
      peticion = this.heroesService.editarHeroe(this.heroe);
    } else {
      // crear un heroe
      peticion = this.heroesService.crearHeroe(this.heroe);

      // console.log(form);
      // console.log(this.heroe);
    }

    peticion.subscribe(respuesta => {
      Swal.fire({
        icon: "success",
        title: this.heroe.nombre,
        text: "Se actualizo correctamente"
      });
    });
  }
}

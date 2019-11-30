// este modulo es el encargado de manejar las rutas

import { NgModule } from "@angular/core";

// importar modulo de rutas
import { Routes, RouterModule } from "@angular/router";

// importar componentes
import { HeroesComponent } from "./pages/heroes/heroes.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "**", pathMatch: "full", redirectTo: "heroes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exporto routerModule para poder utilizarlo de forma GLOBAL
})
export class AppRoutingModule {}

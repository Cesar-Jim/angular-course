import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";

// importar el appRoutingModule para utilizar las rutas
import { AppRoutingModule } from "./app-routing.module";

// para trabajar con formularios a nivel template hay que hacer este import:
import { FormsModule } from "@angular/forms";

// para trabajar con peticiones http
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HeroeComponent, HeroesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

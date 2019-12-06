import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// angular material personalized module
import { MaterialModule } from "./material.module";

// componentes
import { MapaComponent } from "./components/mapa/mapa.component";
import { MapaEditarComponent } from "./components/mapa/mapa-editar.component";
import { ReactiveFormsModule } from "@angular/forms";

// angular maps
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8"
    })
  ],
  providers: [],
  bootstrap: [AppComponent, MapaEditarComponent]
})
export class AppModule {}

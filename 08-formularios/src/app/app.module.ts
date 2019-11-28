import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateComponent } from "./components/template/template.component";
import { DataComponent } from "./components/data/data.component";

// agregar 'ReactiveFormsModule' para el manejo de formularios a través de datos o modelado
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TemplateComponent, DataComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

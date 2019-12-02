import { Component } from "@angular/core";

// importar el servicio del chat
import { ChatService } from "./providers/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public _cs: ChatService) {}
}

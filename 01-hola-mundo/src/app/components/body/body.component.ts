import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  showElement: boolean = true;

  phrase: any = {
    msg: 'Un gran poder requiere una gran responsabilidad',
    author: 'Ben Parker'
  };

  heroes: string[] = ['Batman', 'Superman', 'Spiderman'];
}

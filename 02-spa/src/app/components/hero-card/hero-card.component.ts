import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  // Inputs
  @Input() hero: any = {}; // can get a hero from the outside (using @Input)
  @Input() index: number;

  // Outputs
  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  findHero(i) {
    // console.log(this.index);
    this.router.navigate(['/hero', this.index]);
    // this.selectedHero.emit(this.index);
  }

}

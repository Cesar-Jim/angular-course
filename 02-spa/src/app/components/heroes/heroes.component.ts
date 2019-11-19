import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';

// To deal with routing using a button
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []; // local variable

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  findHero(id: number) {
    // console.log(id);

    this._router.navigate(['/hero', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
})
export class FinderComponent implements OnInit {

  heroes: any[] = [];
  str: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.str = params['str'];
      this.heroes = this.heroesService.searchHeroes(params['str']);
      console.log(this.heroes);
    });
  }

}

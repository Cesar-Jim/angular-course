import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe(
      "Cochinita Pibil",
      "Directo desde Yucatan",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "Tacos Al Pastor",
      "De pollo!",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

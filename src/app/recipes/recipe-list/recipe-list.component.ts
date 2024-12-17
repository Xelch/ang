import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe(
      'Tender apple pie with crispy crust',
      `Just Adjust`,
      '../../../assets/apple-pie.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

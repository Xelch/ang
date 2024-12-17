import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', '200g'),
    new Ingredient('Water', '0.2l'),
  ];
  constructor() {}

  ngOnInit(): void {}
}

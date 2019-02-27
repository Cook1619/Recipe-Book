import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 12),
  ];
  constructor() { }

  ngOnInit() {
  }

}

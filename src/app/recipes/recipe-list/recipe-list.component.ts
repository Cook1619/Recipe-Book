import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Is amazing','https://static1.squarespace.com/static/54309828e4b038261c7ec642/t/5b16069f562fa7121f9c19a5/1528170151671/pizza+image+2.jpg?format=1500w'),
    new Recipe('Pizza', 'Is amazing','https://static1.squarespace.com/static/54309828e4b038261c7ec642/t/5b16069f562fa7121f9c19a5/1528170151671/pizza+image+2.jpg?format=1500w')
  ];
  constructor() { }

  ngOnInit() {
  }

}

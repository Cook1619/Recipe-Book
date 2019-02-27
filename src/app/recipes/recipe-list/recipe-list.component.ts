import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Is amazing','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cicis.com%2Fmedia%2F1176%2Fpizza_trad_pepperonibeef.png&imgrefurl=https%3A%2F%2Fwww.cicis.com%2Fmenu%2Fpizza%2Fpepperoni-beef&docid=fm5r5jRTvhqewM&tbnid=x_7gN_kuIgT94M%3A&vet=10ahUKEwj3iI-frdzgAhUi9IMKHdPHDFIQMwhtKAUwBQ..i&w=1538&h=776&bih=1041&biw=2133&q=pizza&ved=0ahUKEwj3iI-frdzgAhUi9IMKHdPHDFIQMwhtKAUwBQ&iact=mrc&uact=8')
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test recipe 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"),
    new Recipe("A test recipe 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-fudge-cake-91de17a.jpg?quality=90&webp=true&resize=220,200"),
    new Recipe("A test recipe 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Hummus-without-tahini-ded6db2.jpg?quality=90&webp=true&resize=300,272"),
  ];
}

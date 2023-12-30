import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  foods:Food[] = [];

  constructor(private foodService:FoodService, private route:ActivatedRoute){
    let foodsObservable: Observable<Food[]>;
    route.params.subscribe(params => {
      if(params['searchTerm']) foodsObservable = this.foodService.getAllFoodBySearchTerm(params['searchTerm']);
      else if (params['tag']) foodsObservable = this.foodService.getAllFoodByTag(params['tag']);
      else foodsObservable = this.foodService.getAll();

      foodsObservable.subscribe(serverFood => this.foods = serverFood);
    }); 
  }

  ngOnInit():void {}
}

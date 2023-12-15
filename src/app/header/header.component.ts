import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  foods:String[] = [];

  constructor(private foodService:FoodService){}

  ngOnInit():void {
    this.foods = this.foodService.getAll();
  }

}

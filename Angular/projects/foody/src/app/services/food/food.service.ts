import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): string[]{
    return[
      '/assest/images/foods/food-1/jpg',
      '/assest/images/foods/food-2/jpg',
      '/assest/images/foods/food-3/jpg',
      '/assest/images/foods/food-4/jpg',
      '/assest/images/foods/food-5/jpg',
      '/assest/images/foods/food-6/jpg',
    ]
  }
}

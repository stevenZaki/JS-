import { Injectable } from '@angular/core';
import{food} from '../../shared/models/food',

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): food[]{
    return[
      {
        id:1,
        name:'Pizza pepperoni',
        cookTime:'10-20',
      }
    ]
  }
}

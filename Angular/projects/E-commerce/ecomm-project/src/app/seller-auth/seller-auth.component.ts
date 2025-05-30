import { Component } from '@angular/core';
import{signUp} from '../services/seller.service'
import { SellerService } from '../services/seller.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService, private router:Router){}

  signUp(data:signUp):void{
    console.warn(data)
    this.seller.userSignUp(data).subscribe((result)=>{
      console.warn(result)
    })
  }

}

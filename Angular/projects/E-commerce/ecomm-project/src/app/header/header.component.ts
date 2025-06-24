import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private route:Router){  }

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
      console.warn(val.url)
    })
  }
}

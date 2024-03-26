import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data:any;
  constructor(private user:UserService){
    this.user.getData().subscribe(data=>{
      this.data=data;
    })
  }

}

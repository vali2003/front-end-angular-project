import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
user:any;
username:any;
cardlength:any;
constructor(private router:Router,private service:CardService){}
ngDoCheck(){
  this.cardlength=this.service.getlength();
}
ngOnInit(){
  if(localStorage.getItem('user')!=null){
    this.user=JSON.parse(localStorage.getItem('user')||'{}');
    this.username=this.user.username;
  }
  else{
    this.router.navigateByUrl("/");
  }
}
}

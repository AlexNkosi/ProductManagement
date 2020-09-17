import { Component } from '@angular/core';
import {LoginService} from './shared/login.service';
import {Router} from '@angular/router'



import { from } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title:string ;
  _isLogedIn:boolean; 
  linkName:string = "Log in";

  
  public set isloggedIn(v : boolean) {
    
    this.linkName = "Log out";
  }

 
  
  constructor(private loginStatus:LoginService,private router:Router ){
    this.title = 'Gamers Land ';
  }
  checkStatusIsloggedIn():void {
    if(this.loginStatus.isLoggedIn){
      this.linkName = "Log out";
      this.router.navigate(['/productlist']);
      this._isLogedIn = this.loginStatus.isLoggedIn;
      this.isloggedIn = this._isLogedIn;
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}

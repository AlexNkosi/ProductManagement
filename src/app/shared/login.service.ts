import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn:boolean = false; 
  logInStatus:string = "Log In";

  
  public get isLoggedIn() : boolean {
    return  this.loggedIn;
  }

  
  public set setLoggedInStatus(v : boolean) {
    this.loggedIn = v;
    this.logInStatus = "Log out";
  }
  
  
  public get getStatusLogIn() : string {
    return this.logInStatus; 
  }
  
  
  

}

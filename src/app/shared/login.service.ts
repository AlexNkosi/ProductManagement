import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn:boolean = false; 


  
  public get isLoggedIn() : boolean {
    return  this.loggedIn;
  }

  
  public set setLoggedInStatus(v : boolean) {
    this.loggedIn = v;
  }
  
  
  

}

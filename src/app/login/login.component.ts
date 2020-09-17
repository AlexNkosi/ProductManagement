import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../shared/login.service';
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  constructor(private router:Router, private login: LoginService){

  }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password = new FormControl();
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  showShopingList():void {
    if(this.email.value !=="" && this.password.value !==""){
      this.router.navigate(['/productlist']);
      this.login.setLoggedInStatus = true;
    }
    
  }

}

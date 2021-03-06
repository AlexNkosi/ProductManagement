const ROUTES = [

  {path:"welcome", component:WelcomeComponent },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}

];
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from '../home/welcome.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { 


}

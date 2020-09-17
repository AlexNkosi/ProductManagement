import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module'; 
import {ProductModule} from './product-list/product.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductListComponent } from './product-list/product-list.component';
import { from } from 'rxjs';
import { MaterialModule } from './material/Matartial';
import {StarComponent} from './shared/star.component';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import {WelcomeComponent } from './home/welcome.component';
import { ProductDetailsComponent } from './productDetails/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginModule } from './login/login.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AboutModule} from './about/about.module';

import {ContactModule} from './contact/contact.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpace,WelcomeComponent, ProductDetailsComponent, PageNotFoundComponent, LoginComponent, AboutComponent, ContactComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,
    MaterialModule,HttpClientModule, NgbModule,ProductModule,
    LoginModule,ContactModule,AboutModule,
    AppRoutingModule

  ], entryComponents: [
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}]
})
export class AppModule { }

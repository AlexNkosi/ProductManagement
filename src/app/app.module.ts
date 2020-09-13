import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpace,WelcomeComponent, ProductDetailsComponent, PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule,
    MaterialModule,HttpClientModule, NgbModule,ProductModule,
    AppRoutingModule

  ], entryComponents: [
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

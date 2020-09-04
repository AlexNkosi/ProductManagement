import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductListComponent } from './product-list/product-list.component';
import { from } from 'rxjs';
import { MaterialModule } from './material/Matartial';
import {StarComponent} from './shared/star.component'
import { ConvertToSpace } from './shared/convert-to-space.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpace
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule,
    MaterialModule,HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

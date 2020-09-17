import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule}from '@angular/material/card';


import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialsComponets = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,MatInputModule,MatCardModule,
  MatSlideToggleModule,
  MatTabsModule,MatDialogModule,
  MatBadgeModule,MatFormFieldModule,
];



@NgModule({
 
  imports: [MaterialsComponets
    
  ],
  exports:[ 
    MaterialsComponets
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import {MatTableModule} from '@angular/material/table';
import { GridComponent } from '../grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    DataComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class DataModule { }

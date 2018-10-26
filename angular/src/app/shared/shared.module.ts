import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { UserLoginComponent } from '../user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents[
    UserLoginComponent
  ],
  declarations: [ListComponent, MapComponent, UserLoginComponent],
  exports: [ListComponent, MapComponent, MatDialogModule,
    MatButtonModule, FormsModule,
    MatInputModule, ReactiveFormsModule, UserLoginComponent]
})
export class SharedModule { }

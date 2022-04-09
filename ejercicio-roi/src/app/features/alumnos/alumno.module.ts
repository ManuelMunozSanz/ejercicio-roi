import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
import { AuthenticationModule } from '../authentication/authentication.module';




@NgModule({
  declarations: [
    AlumnoFormComponent,
    AlumnoListComponent,
  ],
  imports: [
    CommonModule,

    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    AuthenticationModule



  ],
  exports: [
    AlumnoFormComponent,
    AlumnoListComponent
  ]
})
export class AlumnoModule { }

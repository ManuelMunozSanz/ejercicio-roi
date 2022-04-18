import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AlumnoEditComponent } from './components/alumno-edit/alumno-edit.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';



@NgModule({
  declarations: [
    AlumnoFormComponent,
    AlumnoListComponent,
    AlumnoEditComponent,
  ],
  imports: [
    CommonModule,

    RouterModule,

    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,


    AuthenticationModule

  ],
  exports: [
    AlumnoFormComponent,
    AlumnoListComponent
  ]
})
export class AlumnoModule { }
